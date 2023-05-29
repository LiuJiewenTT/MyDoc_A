# Windows SSH启用密钥登录

links:

1. <https://www.cainiaojc.com/ssh/ssh-key.html>
2. <https://www.cnblogs.com/WNpursue/p/14944047.html>
3. <https://blog.csdn.net/Franklins_Fan/article/details/119324249>
4. <https://zhuanlan.zhihu.com/p/404179039>
5. <https://blog.csdn.net/hanziyuan08/article/details/112001378>

> 唔，这件事有点麻烦。

## Mine

我参考了前面的教程，在开始前我先说几句题外话：

> **关于密钥格式错误的问题**：
>
> 不要用Putty生成的密钥对，我也不知道为什么，转换得不到OpenSSH格式的公钥，导致一直无法使用。正确的做法是打开cmd，运行以下命令，并一路到底无所谓。
>
> ``` shell
> ssh-keygen
> ```
>
> 你要是足够自信，那可以留空Passphrase，这样登录时一切全自动了。
>
> 关于密钥的基础知识和教程，推荐“链接1”。

> **关于权限的问题**：
>
> 如果是要求等同Linux的u的权限，那么禁用集成并清空当前所有权限，随后给文件所有者添加权限即可，在这个情景下，文件所有者就是当前用户。
>
> 如果要求是600，那么仅为当前用户勾选“读取”和“写入”权限即可，不要为其他用户分配权限。

在折腾Windows登录到Windows前，如果你有Linux的机子，不妨把公钥上传到Linux电脑上，然后在Windows电脑上尝试密钥登录到Linux电脑上。如果一切正常，不需要输入密码了，那么开始接下来的折腾：

### 正文

参阅了相关信息，得知首先需要修改`C:\ProgramData\ssh\sshd_config`。

首先我们添加以下三行配置：

``` ini
RSAAuthentication yes
PubkeyAuthentication yes
PermitRootLogin yes
```

然后根据一些教程，得知需要把结尾的两行注释，得到这样的两行：

``` ini
#Match Group administrators
#       AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys
```

我们看到配置中有这么一行：

``` ini
# The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2
# but this is overridden so installations will only check .ssh/authorized_keys
AuthorizedKeysFile	.ssh/authorized_keys
```

但是就这样保存后去重启sshd服务是无效的，即便你配置好了`.ssh/authorized_keys`的内容和文件的权限（600）。

问题出在哪呢？

答案是：“权限”。

假设你的Windows用户名是`HP`，如果权限仅仅是：

- HP
  - 读取
  - 写入

这样是不行的。观察`C:\ProgramData\ssh\`下其它文件的权限，修改为以下配置：

- HP
  - 读取
  - 写入
- Administrators
  - 完全控制
- SYSTEM
  - 完全控制

<strong style="color:red;background:white">保存好配置随后重启`sshd`服务即可正常使用。</strong>

注：重启`sshd`服务可用此命令（需管理员权限）：

``` shell
net stop sshd
net start sshd
```

附：如果你不想注释掉那最后两行，你可以创建硬链接，使用此命令（需管理员权限）：

``` shell
mklink /h %ProgramData%\ssh\administrators_authorized_keys %HOMEDRIVE%%HOMEPATH%\.ssh\authorized_keys
```

### My sshd_config

Here is a copy of my `sshd_config`, you may use this if you trust me.

``` ini
# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

#Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

#HostKey __PROGRAMDATA__/ssh/ssh_host_rsa_key
#HostKey __PROGRAMDATA__/ssh/ssh_host_dsa_key
#HostKey __PROGRAMDATA__/ssh/ssh_host_ecdsa_key
#HostKey __PROGRAMDATA__/ssh/ssh_host_ed25519_key

# Ciphers and keying
#RekeyLimit default none

# Logging
#SyslogFacility AUTH
#LogLevel INFO

# Authentication:

#LoginGraceTime 2m

RSAAuthentication yes
PubkeyAuthentication yes
PermitRootLogin yes

#PermitRootLogin prohibit-password
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

#PubkeyAuthentication yes

# The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2
# but this is overridden so installations will only check .ssh/authorized_keys
AuthorizedKeysFile	.ssh/authorized_keys

#AuthorizedPrincipalsFile none

# For this to work you will also need host keys in %programData%/ssh/ssh_known_hosts
#HostbasedAuthentication no
# Change to yes if you don't trust ~/.ssh/known_hosts for
# HostbasedAuthentication
#IgnoreUserKnownHosts no
# Don't read the user's ~/.rhosts and ~/.shosts files
#IgnoreRhosts yes

# To disable tunneled clear text passwords, change to no here!
#PasswordAuthentication yes
#PermitEmptyPasswords no

# GSSAPI options
#GSSAPIAuthentication no

#AllowAgentForwarding yes
#AllowTcpForwarding yes
#GatewayPorts no
#PermitTTY yes
#PrintMotd yes
#PrintLastLog yes
#TCPKeepAlive yes
#UseLogin no
#PermitUserEnvironment no
#ClientAliveInterval 0
#ClientAliveCountMax 3
#UseDNS no
#PidFile /var/run/sshd.pid
#MaxStartups 10:30:100
#PermitTunnel no
#ChrootDirectory none
#VersionAddendum none

# no default banner path
#Banner none

# override default of no subsystems
Subsystem	sftp	sftp-server.exe

# Example of overriding settings on a per-user basis
#Match User anoncvs
#	AllowTcpForwarding no
#	PermitTTY no
#	ForceCommand cvs server

#Match Group administrators
#       AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys

```



