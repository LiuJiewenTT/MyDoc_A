---
categories: Python, file
---



# pyc, pyo, pyd

Here is a link that explains what are they: [link](https://zhuanlan.zhihu.com/p/429356020).

本文为摘抄。

# 正文

[YangXiaowei-A](https://www.zhihu.com/people/a-ha-ha-9-36)

8 人赞同了该文章

在本文中，我们将介绍python的`.pyc` `.pyo` 和`.pyd`文件类型，同时还将介绍其他的python程序是如何调用由这三种格式的文件保存的字节码。

我们平时写的python代码都保存在`.py`文件中，你可能会好奇上面三种类型的文件到底有什么用。如果想要对他们有清晰的理解，我们可以先简单了解一下python解释器是如何把代码转化为机器可以执行的指令的。

## **字节码和python虚拟机**

Python附带了一个解释器，你可以选择交互式的运行python代码，也可以选择把python写成脚本文件来运行。两种情况下，解析器都是先解析你的代码，然后编译为字节码（bytecode），然后通过python虚拟机来运行代码。

但是，python的虚拟机和其他虚拟机（比如Java虚拟机，Erlang虚拟机）是不同的。python的虚拟机直接连接操作系统和硬件来执行原生的机器指令。

有一点需要明确，`.pyc`、`.pyo`和`.pyd`类型的文件，都是python的解释器在把python代码转化为字节码的过程中产生的。在把源代码转化为操作系统可以执行的机器指令的过程中，中间一定会生成字节码。

这篇文章将分别介绍各种文件类型，以上介绍的Python虚拟机和Python字节码有助于更好的理解各种文件类型。

## **`.pyc`文件类型**

我们首先考虑`.pyc`文件类型，当你导入一个模块时，解释器会自动生成`.pyc`文件，这样会节省下次导入的时间。

举个例子，下面是一个python模块，用来计算阶乘，我们想在其他模块中导入该模块。

```python
# math_helpers.py

# a function that computes the nth factorial, e.g. factorial(2)
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# a main function that uses our factorial function defined above
def main():
    print("I am the factorial helper")
    print("you can call factorial(number) where number is any integer")
    print("for example, calling factorial(5) gives the result:")
    print(factorial(5))

# this runs when the script is called from the command line
if __name__ == '__main__':
    main()
```

当我们使用命令`python math_helpers.py`来运行这个模块的时候，不会产生`.pyc`文件。

现在我们可以把该模块导入其他模块，比如像下面这样。我们从`math_helpers.py`导入`factorial`函数，并且使用该函数计算6的阶乘。

```python
# computations.py

# import from the math_helpers module
from math_helpers import factorial

# a function that makes use of the imported function
def main():
    print("Python can compute things easily from the REPL")
    print("for example, just write : 4 * 5")
    print("and you get: 20.")
    print("Computing things is easier when you use helpers")
    print("Here we use the factorial helper to find the factorial of 6")
    print(factorial(6))

# this runs when the script is called from the command line
if __name__ == '__main__':
    main()
```

然后我们在终端输入`python computations.py`来运行脚本，我们不仅会得到6的阶乘是720，还会注意到解释器自动生成了`math_helpers.cpython-39.pyc`文件。会产生`.pyc`文件的主要原因是在`computations`模块中导入了`math_helpers`模块。为了在将来使用时可以加快导入的速度，解释器创建了该模块的字节码文件。

当源代码文件被更新的时候，`.pyc`文件也会被更新。即只要源代码文件的更新时间和字节码文件的更新时间不一样，字节码文件就会更新以保持一致。

注意，使用`.pyc`文件只是加速程序加载的时间，而不是加速程序执行的时间。也就是说，你可以把主程序写在一个模块，然后被其他的较小的模块调用，以此来加速程序的启动时间。但是，如果想获得程序性能的改进，你需要从算法上或者其他方面进行优化。

因为`.pyc`文件是平台不相关的，所以可以在不同架构的机器上使用同一个`.pyc`文件。然而，如果开发者在他们的系统上使用不同的时钟时间，在生成`.pyc`文件的时候同时生成时间戳，将来其他的开发者读取这个时间戳，这可能导致对源码进行修改的时候不会修改字节码，这是一个不容易被发现的严重的bug。最好的方式就是把在进行版本控制的时候忽略pyc文件。

## **`.pyo`文件类型**

当有模块被导入的时候，解释器也会产生`.pyo`文件，只不过需要告诉解释器开启优化设置。

当我们调用解释器的时候，只需要加上`-O`就可以开启优化设置。下面是一个例子，首先，我们有一个模块定义了一个lambda函数。

```python
# lambdas.py

# a lambda that returns double whatever number we pass it
g = lambda x: x * 2
```

如果你记得前一个例子，我们需要导入这个模块以使用它里面的函数，我们导入`lambdas.py`并使用里面的g函数。

```python
# using_lambdas.py

# import the lambdas module
import lambdas

# a main function in which we compute the double of 7
def main():
    print(lambdas.g(7))

# this executes when the module is invoked as a script at the command line
if __name__ == '__main__':
    main()
```

现在，我们不是像上个例子那样调用python解释器，而是添加优化选项。这样可以产生更小的字节码文件。命令如下：

```bash
python -O using_lambdas.py
```

如果我们使用python3.5以前的版本运行上面的命令，就会产生pyo文件。从python3.5开始，将不再产生pyo文件，而是`lambdas.cpython-39.opt-1.pyc`文件。

优化器一般情况下不会做特别多的工作，只是从你的字节码中移除assert语句。在大多数情况下感受不出来区别，但是执行次数多的话可能会有影响。

产生`.pyo`文件就不再产生`.pyc`文件了（python3.5以前是`.pyo`，python3.5以后就是产生`.opt-1.pyc`文件）。源代码变化的时候，`.pyo`或.`opt-1.pyc`也会随着变化。

## **`.pyd`文件类型**

和前两个相比，`.pyd`文件类型是平台相关的，只和Windows平台有关系。

在Windows平台下，`.pyd`文件是一个包含python代码的库，可以被其他的python程序调用，为了让这个库可以被其他python程序调用，被打包成动态链接库（dynamic link library）。

动态链接库是Windows平台下的代码库，在运行时被调用。它有利于代码重用、代码模块化，并且可以更快的启动程序。因此，DLL在Windows操作系统中发挥了重要作用。

## **总结**

`.pyc`和`.pyo`都包含字节码文件，但是`.pyo`更紧凑。

`.pyd`是动态链接库，只会在Windows操作系统中见到。

所有这些类型的文件都是被其他的python程序调用。

## **参考文献**

[Differences Between .pyc, .pyd, and .pyo Python Files (stackabuse.com)](https://link.zhihu.com/?target=https%3A//stackabuse.com/differences-between-pyc-pyd-and-pyo-python-files/)

发布于 2021-11-04 14:19