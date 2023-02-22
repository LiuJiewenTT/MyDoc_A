---
date: 2023-1-22 17:33:00 +0800
categories: MC, Create
tags: Minecraft, MC, Create, Mod
---

# Create Tags

The information here is derived from [Creators-of-Create/Create](https://github.com/Creators-of-Create/Create) repository's [wiki](https://github.com/Creators-of-Create/Create/wiki) and under: [Useful Tags](https://github.com/Creators-of-Create/Create/wiki/Useful-Tags) item.

## iframe



<iframe style="height:800; width:100%" src="https://github.com/Creators-of-Create/Create/wiki/Useful-Tags" ></iframe>



It seems it's been blocked for security reasons.

> Github Pages version do not show iframes.

## Contents

### Block Tags

- `create:fan_transparent`
  Blocks which will not stop air flows from fans, no matter the voxel shape
  Example: Iron Bars

  > 无论体素形状如何，不会阻止风扇气流的块
  > 示例：铁棒

- `create:non_movable` (`forge:relocation_not_supported` also works)
  Blocks which cannot be moved by contraptions

  > 无法通过装置移动的方块

- `create:movable_empty_collider`
  Blocks which should be able to move on contraptions, but would otherwise be ignored due to their empty collision shape
  Example: Cobweb

  > 应该可以在装置上移动的块，但由于它们的空碰撞形状而被忽略
  > 例如：蜘蛛网

- `create:passive_boiler_heaters`
  Blocks which can provide passive heat to the steam engine multiblock. Not as strong as active Blaze Burners
  Example: Campfire

  > p.s. 指示消极的热源，例如营火

- `create:safe_nbt`
  Blocks tagged safe_nbt will keep their nbt data when printed by a Schematicannon
  Example: Banners, Signs

  > 标记为safe_nbt的块在由Schematicannon打印时将保留其nbt数据
  > 示例：旗帜、标志

- `create:tree_attachments`
  Blocks which should be harvested as part of a tree when cut by a Mechanical Saw
  Example: Mangrove Propagule

  > 用机械锯切割时应作为树木一部分收获的木块
  > 示例：红树林繁殖体

- `create:windmill_sails`
  Blocks which can count toward a functional windmill structure
  Example: Wool

  > 可被视为风车功能性结构的方块
  > 示例：羊毛

- `create:wrench_pickup`
  Blocks which can be broken and collected very quickly using a Wrench (Sneak-Right-Click)
  Example: Rails, Various Redstone components

  > 可以使用扳手快速破碎和收集的块（潜行右键单击）
  > 示例：轨道、各种红石组件

---

That's all from the item online.

### Item Tags

- `create:blaze_burner_fuel/regular`
  Items which do not have "burn time" for furnaces, but should act as food for the blaze burner (same value as coal)

  > 能喂给烈焰人（燃烧室）的“食物”，例如：煤

- `create:blaze_burner_fuel/special`
  Items which upon being fed to blaze burners should cause them to be super heated (same value as blaze cakes)

  > 能造成超级加热效果的“食物”，例如：烈焰蛋糕

- `create:upright_on_belt`
  Items which should render standing up on belts or depots, much like fluid container items
  Example: Blaze Cake

  > 在传送带和置物台上站立展示的物品，例如水桶

- `create:pressurized_air_sources`
  Items which can provide air much like a Copper Backtank. Uses the "Air" value in its nbt data to operate

  > 能提供空气的物品，很像铜背箱。使用其nbt数据中的“空气”值进行操作
  >
  > p.s. 那我是不是可以设计更多一次性或者廉价氧气来源了？嘿嘿~

Other Tags added and used primarily for crafting recipes:

> 以下多用于合成配方

- `create:casing`

- `create:create_ingots`

- `create:crushed_ores`

- `create:modded_stripped_logs`

  > “去皮原木”？

- `create:modded_stripped_wood`

- `create:vanilla_stripped_logs`

  > 原版“去皮原木”？

- `create:vanilla_stripped_wood`

- `create:sandpaper`

- `create:seats`

- `create:sleepers`

- `create:toolboxes`

- `create:valve_handles`

> 只能说，这部分基本没什么用处，至少对于一般人来说。

---

That's all from the item online.

### Fluid Tags

- `create:bottomless/allow`
  Fluids which **can** be drained infinitely using a hose pulley. Requires config to be in allow-list mode

  > 可以被无限抽取的液体。需要配置在allow-list模式
  >
  > p.s. <del>我觉得不应该用得上，除非你有特殊需求。这将导致*hose pulley*不太有存在的意义。</del>

- `create:bottomless/deny`
  Fluids which **cannot** be drained infinitely using a hose pulley. Requires config to be in deny-list mode

  > 可以被无限抽取的液体。需要配置在deny-list模式

By default, configs are set to allow-list mode and only water and lava are tagged bottomless/allow

> 默认设为allow-list模式，并且只有水和岩浆是“无尽的”。

> p.s. 我想应该是那个一万格液体的限制吧，毕竟默认是“无尽的”。也许deny-list拒绝了那个门槛吧，猜测这会导致生成地形时出现奇怪问题，例如抽干部分海域。

---

That's all from the item online.