<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <button slot="start" v-on:click="open_side()" id="menu">
                    <span class="material-symbols-rounded menu"> menu </span>
                </button>
                <ion-img
                    src="assets/img/bicara-logo.svg"
                    style="height: 70px"
                    slot="start"
                ></ion-img>
                <ion-button @click="setModalOpen(true)" slot="end">
                    <span class="material-symbols-outlined"> video_call </span>
                    <p class="upload-nav" style="margin-left: 10px">
                        Upload Video
                    </p>
                </ion-button>
                <a class="avatar" slot="end" id="click-trigger">
                    <ion-avatar
                        slot="end"
                        style="width: 38px; height: 38px; margin-left: 10px"
                    >
                        <img
                            alt="Silhouette of a person's head"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg"
                        />
                    </ion-avatar>
                </a>
                <ion-popover trigger="click-trigger" trigger-action="click">
                    <ion-content class="ion-padding">
                        <ion-list>
                            <ion-avatar
                                slot="end"
                                style="width: 45px; height: 45px"
                            >
                                <img
                                    alt="Silhouette of a person's head"
                                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                                />
                            </ion-avatar>
                            <p class="nameacc">{{ sessionName }}</p>
                            <p class="emailacc">{{ sessionEmail }}</p>
                        </ion-list>
                    </ion-content>
                </ion-popover>

                <ion-modal
                    id="example-modal"
                    ref="modal"
                    trigger="open-modal-upload"
                    :is-open="isModalOpen"
                >
                    <div
                        class="wrapper"
                        @dragover="dragover"
                        @dragleave="dragleave"
                        @drop="drop"
                    >
                        <h1 style="color: black">Upload Your Video</h1>

                        <input
                            type="file"
                            name="file"
                            id="fileInput"
                            class="hidden-input"
                            v-on:change="onChange"
                            ref="file"
                            accept=".mp4"
                        />

                        <label class="uploaddrag file-label" for="fileInput">
                            <ion-img
                                class="uploadvid-img"
                                src="assets/icon/uploadvid.svg"
                            ></ion-img>
                            <p v-if="isDragging" class="textupload">
                                Release to drop files here.
                            </p>
                            <p v-else class="textupload">
                                Drag and drop file or
                                <span style="cursor: pointer"
                                    >browse local files</span
                                >
                            </p>
                            <p class="textupload2">max. file size 10MB</p>
                        </label>

                        <ion-button
                            :disabled="true"
                            v-on:click="upload_video"
                            id="upload_button"
                            >Upload</ion-button
                        >
                        <ion-alert
                            :is-open="isLoading"
                            message="Your video is being processed. We will notify you an email when it's done."
                            :buttons="['OK']"
                        ></ion-alert>
                    </div>
                </ion-modal>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="dashboard">
                <!-- Sidebar Dashboard-->
                <div
                    class="aside w3-animate-left"
                    id="aside"
                    style="position: fixed"
                >
                    <div class="firstsidebar">
                        <div
                            style="
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                            "
                        >
                            <h1 slot="start">
                                Hi, {{ sessionName.split(" ")[0] }}!
                            </h1>
                            <button
                                slot="end"
                                v-on:click="close_side()"
                                id="close"
                            >
                                <span class="material-symbols-rounded close">
                                    close
                                </span>
                            </button>
                        </div>
                        <h4>What would you like to do today?</h4>
                        <a href="/dashboard">
                            <span class="material-symbols-outlined">home</span>
                            <p>Home</p>
                        </a>
                        <a href="/history">
                            <span class="material-symbols-outlined">
                                movie
                            </span>
                            <p>History</p>
                        </a>
                        <a href="/library">
                            <span class="material-symbols-outlined">
                                video_library</span
                            >
                            <p>Library</p>
                        </a>
                        <a href="#">
                            <span class="material-symbols-outlined">
                                help_center
                            </span>
                            <p>FAQ</p>
                        </a>
                        <a
                            href=""
                            class="onlymobile"
                            @click.prevent="setModalOpen(true)"
                        >
                            <span class="material-symbols-outlined">
                                video_call
                            </span>
                            <p>Upload Video</p>
                        </a>
                    </div>
                    <div class="lastsidebar">
                        <a href="#">
                            <span class="material-symbols-outlined">
                                group
                            </span>
                            <p>Contact Support</p>
                        </a>
                        <a href="#" @click.prevent="logoutMethod">
                            <span class="material-symbols-outlined">
                                logout
                            </span>
                            <p>Sign Out</p>
                        </a>
                    </div>
                </div>

                <!-- Content Library -->
                <div class="content">
                    <h1>Speech Recomendation</h1>
                    <ion-card class="history-video">
                        <ion-grid>
                            <ion-row>
                                <ion-col size="3">
                                    <h4 class="title">Bicara.ia Partnership</h4>
                                </ion-col>
                                <ion-col>
                                    <h4 class="title">Title</h4>
                                </ion-col>
                            </ion-row>
                            <ion-row class="table-history">
                                <ion-col size="3">
                                    <a href="">
                                        <ion-img
                                            class="sample-img"
                                            src="assets/img/gambar.png"
                                        ></ion-img>
                                    </a>
                                </ion-col>
                                <ion-col>
                                    <p class="tablecontent">
                                        Ambassador Kim's Remarks on Women in
                                        Fintech
                                    </p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-card>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonButton,
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonModal,
    IonPopover,
    IonImg,
    IonAvatar,
    IonList,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonAlert,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
    name: "LibraryPage",
    components: {
        IonButton,
        IonContent,
        IonPage,
        IonHeader,
        IonToolbar,
        IonModal,
        IonPopover,
        IonImg,
        IonAvatar,
        IonList,
        IonCard,
        IonCol,
        IonRow,
        IonGrid,
        IonAlert,
    },
    data() {
        return {
            sessionEmail: "",
            sessionName: "",
            isDragging: false,
            file: "",
            isModalOpen: false,
            isLoading: false,
        };
    },
    methods: {
        logoutMethod() {
            localStorage.removeItem("email");
            localStorage.removeItem("name");
            this.$router.push("/homepage");
        },
        setModalOpen(isModalOpen: boolean) {
            this.isModalOpen = isModalOpen;
        },
        close_side() {
            (
                document.getElementById("aside") as HTMLInputElement
            ).style.display = "none";
            (
                document.getElementById("close") as HTMLInputElement
            ).style.display = "none";
            (
                document.getElementById("menu") as HTMLInputElement
            ).style.display = "inline-block";
        },
        open_side() {
            (
                document.getElementById("menu") as HTMLInputElement
            ).style.display = "none";
            (
                document.getElementById("aside") as HTMLInputElement
            ).style.display = "block";
            (
                document.getElementById("close") as HTMLInputElement
            ).style.display = "inline-block";
        },
        onChange(e: { target: { files: any } }) {
            console.log(e.target.files[0]);
            this.file = e.target.files[0];
            (
                document.getElementById("upload_button") as HTMLInputElement
            ).disabled = false;
        },
        dragover(event: {
            preventDefault: () => void;
            currentTarget: {
                classList: {
                    contains: (arg0: string) => any;
                    remove: (arg0: string) => void;
                    add: (arg0: string) => void;
                };
            };
        }) {
            event.preventDefault();
            this.isDragging = true;
        },
        dragleave() {
            this.isDragging = false;
        },
        drop(event: {
            preventDefault: () => void;
            dataTransfer: { files: any };
            currentTarget: {
                classList: {
                    add: (arg0: string) => void;
                    remove: (arg0: string) => void;
                };
            };
        }) {
            event.preventDefault();
            this.file = event.dataTransfer.files[0];
            console.log(this.file);
            (
                document.getElementById("upload_button") as HTMLInputElement
            ).disabled = false;
            this.isDragging = false;
        },
        upload_video() {
            let formData = new FormData();
            formData.append("file", this.file);
            formData.append("email", this.sessionEmail);
            axios
                .post("http://127.0.0.1:5000/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            this.isLoading = true;
            (
                document.getElementById("upload_button") as HTMLInputElement
            ).disabled = true;
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        },
    },
    mounted() {
        this.sessionEmail = localStorage.getItem("email") ?? "";
        this.sessionName = localStorage.getItem("name") ?? "";
        document.addEventListener("click", (e) => {
            if (e.target != document.querySelector("#example-modal")) {
                this.setModalOpen(false);
            }
        });
        axios
            .get("http://127.0.0.1:5000/signin")
            .then((res) => {
                if (
                    this.sessionEmail == ""
                ) {
                    window.location.href = "/homepage";
                } else {
                    console.log("User not logged in");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },
});
</script>

<style scoped>
#container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
}

#container a {
    text-decoration: none;
}

ion-header ion-img {
    margin-top: -10px;
}

ion-page {
    --ion-background-color: #ffffff;
}

/* CSS HEADER/NAVBAR */

ion-header ion-toolbar ion-title {
    font-family: "Krona One", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
}

ion-header ion-toolbar {
    --background: #3e54d3;
    --padding-start: 10px;
    --padding-end: 20px;
    --padding-top: 15px;
    --padding-bottom: 15px;
    --color: white;
}

ion-header ion-toolbar ion-button,
.upload-vid {
    --background: #ffffff;
    --background-hover: #3e54d3;
    --background-activated: #dcdcdc;
    --background-focused: #dddddd;
    --color: rgb(0, 0, 0);
    --border-radius: 10px;
    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);
    --ripple-color: #4f80e2;
    --padding-top: 0px;
    --padding-bottom: 0px;
    font-family: "Segoe UI", Arial, sans-serif;
    margin-right: 10px;
    text-transform: capitalize;
    font-style: normal;
    font-weight: 600;
    /* line-height: 24px; */
    letter-spacing: -1px;
    font-size: 18px;
}

ion-header ion-toolbar button .menu {
    font-size: 30px;
    margin-left: 15px;
}
ion-header ion-toolbar button .close {
    font-size: 30px;
    margin-left: 15px;
    display: none;
}

ion-button i {
    width: 10px;
    margin-right: 15px;
}

.avatar {
    width: fit-content;
    height: fit-content;
}

ion-popover {
    --backdrop-opacity: 0;
    margin-top: 10px;
    margin-right: 10px;
}

ion-modal#example-modal {
    --width: 680px;
    /* --min-width: 250px; */
    --height: 450px;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
    padding-left: 20px;
    padding-right: 20px;
}

.file-label {
    /* font-size: 20px; */
    display: block;
}
.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.wrapper {
    margin: 30px;
    /* height: 100%; */
}

.wrapper > h1 {
    margin: 18px 0px;
    font-size: 24px;
}

.uploaddrag {
    border: 7px dashed #15cdcb4f;
    width: 100%;
    height: 285px;
    padding-top: 30px;
}

.uploadvid-img {
    width: 140px;
    margin: 20px auto;
}

.uploaddrag > p {
    font-family: "Segoe UI", Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.45);
    margin: 0px;
    text-align: center;
}

.textupload {
    font-size: 20px;
}
.textupload2 {
    font-size: 18px;
    margin-top: 5px !important;
}

.textupload > span {
    color: #3e54d3;
    text-decoration: underline;
}

.wrapper > ion-button {
    --background: #3e54d3;
    --border-radius: 8px;
    width: 100%;
    margin: 20px 0px;
    font-family: "Segoe UI", Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 18px;
}

#menu {
    background-color: #3f54d1;
}

#close {
    background-color: #ffffff;
    color: black;
}

ion-popover {
    font-family: "Segoe UI", Arial, sans-serif;
    font-weight: 600;
    font-size: 18px;
    border-radius: 10px !important;
}

ion-list,
ion-item {
    background-color: #ffffff;
    padding: 0px;
}

.nameacc,
.emailacc {
    margin: 5px 0px;
}

.nameacc {
    margin-top: 15px;
}

.emailacc {
    color: #8c8c8c;
    font-size: 16px;
}
/* CSS SIDEBAR */

.dashboard {
    display: flex;
}

.aside {
    background-color: rgb(255, 255, 255);
    border-right: 1px solid #8c8c8c;
    width: 300px;
    height: 100%;
    display: none;
    z-index: 200;
}

.w3-animate-left {
    position: relative;
    animation: animateleft 0.4s;
}
@keyframes animateleft {
    from {
        left: -200px;
        opacity: 0;
    }
    to {
        left: 0;
        opacity: 1;
    }
}

.aside ion-button {
    --background: #ffffff;
    --background-hover: #3e54d3;
    --background-activated: #dcdcdc;
    --background-focused: #dddddd;
    --color: rgb(0, 0, 0);
    --border-radius: 20px;
    --box-shadow: 0;
    --ripple-color: #4f80e2;
    text-transform: capitalize;
    font-family: "Segoe UI", Arial, sans-serif;
    letter-spacing: 0px;
    width: 230px;
}

.aside h4 {
    position: relative;
}
.aside h1 {
    margin: 9px 0;
}

.aside ion-button span {
    margin-right: 10px;
}

.aside a:nth-child(5) {
    outline: 0;
    appearance: none;
    text-decoration: none;
    list-style: none;
    display: flex;
    color: rgb(255, 255, 255);
    position: relative;
    width: 220px;
    border-radius: 20px;
    padding-left: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #3f54d1;
    font-size: 18px;
    gap: 8px;
    font-weight: 600;
    font-family: "Segoe UI", Arial, sans-serif;
}
.aside a {
    outline: 0;
    appearance: none;
    text-decoration: none;
    list-style: none;
    display: flex;
    color: rgb(0, 0, 0);
    position: relative;
    width: 220px;
    border-radius: 20px;
    padding-left: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 18px;
    gap: 8px;
    margin-top: 6px;
    font-weight: 510;
    font-family: "Segoe UI", Arial, sans-serif;
    transition: background-color 0.6s;
}

.aside .firstsidebar {
    margin: 0px 25px;
    margin-top: 20px;
}
.aside .lastsidebar {
    position: absolute;
    bottom: 100px;
    border-top: 1px solid #8c8c8c;
    padding: 10px 25px;
    width: 100%;
}

.aside a span {
    margin-top: 4px;
}

.aside a:hover {
    background-color: rgb(226, 232, 238);
    color: black;
}

.aside a:nth-child(5):hover {
    background-color: #3f54d1;
    color: #ffffff;
}

.aside a p {
    margin: 3px 0 0 5px;
    padding: 0;
}

/* CSS Content Dashboard */

.content {
    width: 1000px;
    margin: 0 auto;
    padding-top: 10px;
    transition: all 0.2 s;
}

.content h1 {
    font-size: 30px;
    margin: 20px 8px;
}

.card {
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    background-color: #e4eaeffe;
    color: black;
    border-radius: 10px;
    text-align: center;
    margin: 0;
    display: flex;
    justify-content: center;
    height: 100%;
}

/* .isicontent */

ion-footer ion-toolbar {
    --background: white;
    margin: 20px;
    width: auto;
}
ion-footer ion-toolbar ion-title {
    font-size: 15px;
    text-align: center;
}

ion-card {
    --background: #e4eaeffe;
    --color: black;
    border-radius: 10px;
    box-shadow: none;
    margin: 0;
    padding: 0 !important;
}

.title,
.tablecontent {
    text-align: left;
    margin-left: 10px;
    font-family: "Segoe UI", Arial, sans-serif;
}

.tablecontent {
    font-size: 18px;
    font-weight: 450;
}

ion-grid {
    padding: 0;
}
.table-history {
    border-top: 1px solid #8c8c8c;
    height: 130px;
}

.sample-img {
    margin: 5px;
}

@media (max-width: 992px) {
    .content {
        width: 576px;
    }

    .upload-nav {
        display: none;
    }
}

@media (max-width: 576px) {
    ion-input {
        font-family: "Segoe UI";
        font-size: 18px;
        z-index: 10;
        width: 55vw;
        height: 33px;
        --background: #ffffff;
        --color: rgb(0, 0, 0);
        --placeholder-opacity: 0.8;
        --padding-bottom: 10px;
        --padding-end: 10px;
        --padding-start: 10px;
        --padding-top: 10px;
        margin-right: 20px;
    }

    .dashboard {
        z-index: 0;
    }
    ion-header {
        display: none;
    }
    .detail-rating,
    ion-header ion-toolbar ion-button,
    ion-header ion-toolbar ion-avatar,
    #asidee {
        display: none;
    }

    .content {
        width: 97vw;
    }

    .content h1 {
        font-size: 25px;
    }

    .content .title-rat {
        margin-top: 0px;
        color: #ffffff;
    }

    ion-card-content {
        padding: 10px;
        font-size: 18px;
    }
}
</style>
