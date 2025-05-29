<script setup lang="ts">
import {onMounted, ref} from "vue";
import logo from "../assets/icon.png";
import browser from "webextension-polyfill";
import {sendToBackground} from "@plasmohq/messaging";

interface Tab {
    name: string;
    id: number;
}

interface Link {
    text: string;
    url: string;
}

const tabList: Tab[] = [
    {name: "일반", id: 0},
    {name: "고급", id: 1},
    {name: "차단", id: 2},
    {name: "메모", id: 3},
    {name: "단축키", id: 4}
];

const currentTab = ref<number>(0);

function changeTab(id: number) {
    currentTab.value = id;
}

const linkList: Link[] = [
    {
        text: "GitHub",
        url: "https://github.com/green1052/DCRefresher-Reborn"
    },
    {
        text: "Discord",
        url: "https://discord.gg/SSW6Zuyjz6"
    },
    {
        text: "후원",
        url: "https://www.buymeacoffee.com/green1052"
    },
    {
        text: "도움말",
        url: "https://dcrefresher.green1052.com"
    }
];

const settings = ref<SettingsStore>({});

onMounted(async () => {
    settings.value = await sendToBackground({name:"settings"});
});

const version = browser.runtime.getManifest().version_name ?? browser.runtime.getManifest().version;

</script>

<template>
    <div class="options">
        <div class="title">
            <h1>설정</h1>

            <div class="float-right">
                <p v-for="tab in tabList" :key="tab.id"
                   :class="{active: currentTab === tab.id}"
                   @click="changeTab(tab.id)">
                    {{ tab.name }}
                </p>
            </div>
        </div>

        <transition-group>
            <div v-if="currentTab === 0" key="0" class="tab tab0">
                <div class="info">
                    <div class="icon-wrap">
                        <img class="icon" :src="logo">
                    </div>

                    <div class="text">
                        <h3>DCRefresher ReReborn</h3>
                        <p>
                            <span class="version">{{ version }}</span>
                            <a v-for="link in linkList" :key="link.url" :href="link.url" target="_blank">{{ link.text }}</a>
                        </p>
                        <p>
                            <span class="version">
                                데이터베이스 버전: 1
                                <svg
                                    height="12px"
                                    style="cursor: pointer"
                                    viewBox="0 0 30 30"
                                    width="12px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"
                                    />
                                </svg>
                            </span>
                        </p>
                    </div>

                </div>

                <div class="settings">
                    <div v-if="settings !== null" v-for="module in Object.keys(settings)">
                        1
                    </div>
                    
                </div>

            </div>

        </transition-group>

    </div>
</template>

<style lang="scss" scoped>
.options {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans CJK KR", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
    overflow: hidden;
    background: #fff;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }


    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 100%;

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    span {
        letter-spacing: -0.66px;
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: bold;
    }

    h1 {
        font-size: 24px;
    }

    h2 {
        font-size: 22px;
    }

    h3 {
        font-size: 20px;
    }

    a {
        margin-right: 5px;
        color: #2475ee;
        text-decoration: none;
        transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
        cursor: pointer;
    }

    a:hover {
        color: #33a3ee;
    }

    a:active {
        color: #33b9ee;
    }

    a::after {
        content: "•";
        margin-left: 5px;
        border-radius: 50%;
    }

    a:last-child::after {
        display: none;
    }
}

.title {
    padding: 0 7.5vw 2vh 7.5vw;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    width: 90%;
    left: 0;
    position: fixed;
    z-index: 10;
    background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0.9),
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0)
    );

    h1 {
        margin-top: auto;
        margin-bottom: auto;
    }

    .float-right {
        margin-left: auto;
        margin-right: 2.5vw;

        display: flex;

        p {
            margin: auto;
            padding: 5px 10px;
            font-weight: bold;
            font-size: 16px;
            color: #a0a0a0;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);

            &:hover {
                color: rgb(177, 177, 177);
            }

            &:active {
                color: rgb(197, 197, 197);
            }

            &.active {
                color: #333;
            }
        }
    }
}

.tab {
    overflow: auto;
    position: absolute;
    width: 90%;
    height: 345px;
    padding-top: 40px;
    margin-top: 30px;

    & > *:first-child {
        margin-top: 5px;
    }
}

.tab0 {
    .info {
        display: flex;

        .text {
            font-size: 16px;
            display: grid;

            h3 {
                margin-top: auto;
            }

            p {
                margin-bottom: auto;
            }

            .version {
                // color: #dddddd;
                color: #333;
                font-weight: bold;
                margin-right: 5px;
            }
        }
    }

    .settings {
        margin-top: 20px;
    }
}

.icon-wrap {
    display: block;
    position: relative;
    width: 64px;
    height: 64px;
    margin: 20px;

    .icon {
        position: absolute;
    }
}

.icon {
    width: 64px;
    height: 64px;
}


.slide-left-enter-active {
    transition: all 450ms cubic-bezier(0.19, 1, 0.22, 1);
}

.slide-left-leave-active {
    display: none;
}

.slide-left-enter,
.slide-left-leave-to {
    position: absolute;
    transform: translateX(10px);
    opacity: 0;
}

.slide-left-enter-to {
    transform: translateX(0px);
    opacity: 1;
}

</style>