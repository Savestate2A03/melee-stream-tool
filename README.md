# Melee Stream Tool
The goal of this project is to provide an all-in-one stream tool for broadcasting Super Smash Brothers Melee. It spins up an administrative front-end, and OBS front-end, and a back-end that handles all the communication between services.

## Recommendations
The goal for this is to be platform-agnostic. However, I recommend utilizing VSCodium *(or VSCode if you wish to give Microsoft your data)* as it provides workspace plugin recommendations and configurations that are helpful for working within the project.

### Current VSCodium Plugins
- **Angular Language Service** *(Angular.ng-template)*
- **Markdown Preview Mermaid Support** *(bierner.markdown-mermaid)*
- **Code Spell Checker** *(streetsidesoftware.code-spell-checker)*

## Requirements
There are some prerequisite requirements before running:
- **OBS Studio 28+** (OBS Websocket 5.0+)
- A properly set up **Wii**
  - Latest version of [**Slippi Nintendont**](https://slippi.gg/downloads)
  - Has a [nickname set](extras/README_nickname.png) with the `slippi-wiiconf` app
- Latest [**Slippi Launcher**](https://slippi.gg/downloads)
  - Able to utilize Slippi's **Console Mirror** via LAN (no Wi-fi)
    - **Enable Real-time Mode** is checked and works without issue
    - **Enable Console Relay** is checked
- A **capture card** for the Wii
- **2x web-capable devices** for players to operate 
- **start.gg API key**

*...I may be forgetting something*

## Initial Architecture

```mermaid
---
config:
  theme: neutral
  layout: elk
  elk:
    mergeEdges: false
    nodePlacementStrategy: NETWORK_SIMPLEX
---
flowchart TD
subgraph parent[" "]
 subgraph internet["The Internet"]
        sgg(["start.gg"])
  end
 subgraph s7["Browser / App"]
        bw["Admin Interface"]
  end
 subgraph s6["Frontend Server"]
        fs1["/admin"]
        fs2["/player"]
        fs3["/canvas"]
  end
 subgraph s8["Backend Server"]
        B["Backend Server"]
        n7["Internal State"]
  end
 subgraph s5["melee-stream-tool"]
        s8
        s6
  end
 subgraph s4["Slippi"]
        n3["Slippi Launcher"]
        n6["Rendered Mirror"]
  end
 subgraph s2["OBS Studio"]
        n4["OBS Websocket 5.0+"]
        n5["Rendering Canvas"]
  end
 subgraph s1["Local Computer"]
        s7
        s5
        s4
        s2
  end
 subgraph s3["Wii"]
        n2["LAN Adapter"]
        n1["Slippi Nintendont"]
  end
 subgraph player1["Player Devices"]
        pd1["Player Device 1"]
        pd2["Player Device 2"]
  end
    n1 --> n2
    fs3 -- Frontend --> n5
    n6 --> n5
    fs2 -- Frontend --> pd1 & pd2
    n2 -- Live Game Data --> n3
    n3 -- Console Relay --> B
    bw -- Request Frontend --> fs1
    n3 -- Enable/Disable Source --> n4
    B <-- Data API --> pd1 & pd2 & bw & n5
    B <-- Source Control (maybe?) --> n4
    B <-- Tournament Requests --> sgg
    B <--> n7
    B@{ shape: proc}
    n7@{ shape: internal-storage}
    n1@{ shape: rect}
end
```

## Running

WIP

## Extras

I have placed a fun variation of the Slippi Nintendont icon for the HBC app featuring myself howling at the Slippi Logo as a moon if you would like to use it.

> File: [`./extras/rei-wolf-slippi-nintendont-icon/icon.png`](extras/rei-wolf-slippi-nintendont-icon/icon.png)
> 
> ![](extras/rei-wolf-slippi-nintendont-icon/icon.png)
> 

To use it, overwrite `icon.png` in the app's folder on your SD card/USB drive:

![](extras/rei-wolf-slippi-nintendont-icon/screenshot1.png)

In addition, the version indicator can be changed in the [original .xcf](extras/rei-wolf-slippi-nintendont-icon/nintendont%20icon.xcf) *(the native file format for [GIMP](https://www.gimp.org/))*:

![](extras/rei-wolf-slippi-nintendont-icon/screenshot2.png)

## Credits
Future contributors feel free to add yourself here:
- An uncountable number of people, animals, matter, thought, which through circumstances have led up to this point in time and space which allow me to experience a life where I am able to make this project.
- rei wolf

## License
See [LICENSE](LICENSE).