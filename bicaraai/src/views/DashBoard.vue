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
            <!--Mobile -->
            <div class="background-mobile"></div>
            <div class="intro-mobile-2">
                <h1 slot="start" style="margin: 10px 3px">Bicara.ai</h1>
                <button slot="end" v-on:click="open_side()" id="menu">
                    <span class="material-symbols-rounded menu"> menu </span>
                </button>
            </div>
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
                            href="#"
                            class="onlymobile"
                            @click.prevent="setModalOpen(true)"
                        >
                            <span class="material-symbols-outlined">
                                video_call
                            </span>
                            <p>Upload Video</p>
                        </a>
                        <!-- <a class="onlymobile" href="#">
              <span class="material-symbols-outlined "> account_circle </span>
              <p>Account</p>
            </a> -->
                    </div>
                    <div class="lastsidebar">
                        <a href="#">
                            <span class="material-symbols-outlined">
                                group
                            </span>
                            <p>Contact Support</p>
                        </a>
                        <a href="" @click.prevent="logoutMethod">
                            <span class="material-symbols-outlined">
                                logout
                            </span>
                            <p>Sign Out</p>
                        </a>
                    </div>
                </div>

                <!-- Content Dashboard -->
                <div class="content">
                    <!-- Mobile -->
                    <div class="intro-mobile" style="margin-top: 78px">
                        <div class="search-mobile">
                            <span class="material-symbols-outlined">
                                search
                            </span>
                            <ion-input
                                class="search-mobile2"
                                placeholder="Search"
                            ></ion-input>
                        </div>
                        <h4>
                            Hi, {{ sessionName.split(" ")[0] }}! What would you
                            like to do today?
                        </h4>
                    </div>
                    <!-- Bagian Rating Result -->
                    <h1 class="title-rat">Rating Result</h1>
                    <ion-card v-if="result.length == 0" class="empty-state">
                        <ion-img
                            class="empty-img"
                            src="assets/icon/empty.png"
                        ></ion-img>
                        <div style="position: relative">
                            <ion-card-content>
                                There are no video yet
                            </ion-card-content>
                            <p class="title-empty">
                                You can add your video with the button in the
                                bottom right corner (maximum video size 10 MB).
                            </p>
                            <div class="empty-button">
                                <ion-button
                                    class="upload-vid"
                                    @click="setModalOpen(true)"
                                >
                                    <span class="material-symbols-outlined">
                                        video_call
                                    </span>
                                    <p
                                        class="upload-nav2"
                                        style="margin-left: 10px"
                                    >
                                        Upload Video
                                    </p>
                                </ion-button>
                            </div>
                        </div>
                    </ion-card>
                    <ion-grid v-else>
                        <ion-row class="ion-justify-content-between">
                            <ion-col size="12" size-sm="6" size-lg="4">
                                <div class="card">
                                    <p class="upload-rating">
                                        Uploaded {{ date }}
                                    </p>
                                </div>
                            </ion-col>
                        </ion-row>
                        <!-- score, filler, pacing -->
                        <!-- detail -->
                        <ion-row>
                            <ion-col>
                                <!-- Tampilan detail di mobile -->
                                <ion-card class="mobile-rating">
                                    <div>
                                        <div
                                            v-if="result"
                                            style="background-color: #3f54d1"
                                        >
                                            <p class="detail-title">
                                                Eye Contact
                                            </p>
                                            <p class="detail-title">
                                                {{ EyeContactMsg }}
                                            </p>
                                        </div>
                                        <div style="background-color: #15cdcb">
                                            <p class="detail-title">
                                                Filler Word
                                            </p>
                                            <p class="detail-persen">
                                                {{ FillerWord }}
                                                <span style="font-size: 17px"
                                                    >Fillers</span
                                                >
                                            </p>
                                        </div>
                                        <div style="background-color: #4fe0b5">
                                            <p class="detail-title">Pacing</p>
                                            <p class="detail-persen">
                                                {{ Pacing }}
                                                <span style="font-size: 17px"
                                                    >word/min</span
                                                >
                                            </p>
                                        </div>
                                    </div>
                                </ion-card>
                                <!-- Tampilan detail di desktop -->
                                <ion-card class="detail-rating">
                                    <ion-row>
                                        <ion-col
                                            size="6"
                                            size-sm="4"
                                            size-lg="4"
                                            class="detailborder"
                                        >
                                            <div class="detail">
                                                <p>
                                                    <span
                                                        class="dot inton"
                                                    ></span>
                                                </p>
                                                <p>Eye Contact</p>
                                            </div>
                                            <p
                                                class="val"
                                                style="color: #3f54d1"
                                            >
                                                {{ EyeContactMsg }}
                                            </p>
                                        </ion-col>
                                        <!-- <ion-col size="6" size-sm="6" size-lg="3" class="detailborder none">
                      <div class="detail">
                        <p><span class="dot pronun"></span></p>
                        <p>Pronunciation</p>
                      </div>
                      <p class="val">65.7%</p>
                      <div class="progessline">
                        <div class="progessvalue pronun" style="width: 65.7%"></div>
                      </div>
                    </ion-col> -->
                                        <ion-col
                                            size="6"
                                            size-sm="4"
                                            size-lg="4"
                                            class="detailborder none2"
                                        >
                                            <div class="detail">
                                                <p>
                                                    <span
                                                        class="dot grammar"
                                                    ></span>
                                                </p>
                                                <p>Filler Word</p>
                                            </div>
                                            <p
                                                class="val"
                                                style="color: #15cdcb"
                                            >
                                                {{ FillerWord }} Fillers
                                            </p>
                                        </ion-col>
                                        <ion-col
                                            size="6"
                                            size-sm="4"
                                            size-lg="4"
                                        >
                                            <div class="detail">
                                                <p>
                                                    <span
                                                        class="dot eyecontact"
                                                    ></span>
                                                </p>
                                                <p>Pacing</p>
                                            </div>
                                            <p
                                                class="val"
                                                style="color: #4fe0b5"
                                            >
                                                {{ Pacing }} word/min
                                            </p>
                                        </ion-col>
                                    </ion-row>
                                </ion-card>
                            </ion-col>
                        </ion-row>
                        <ion-row class="ion-justify-content-end">
                            <a href="/history" class="previous-vid"
                                >See your previous video analysis</a
                            >
                        </ion-row>
                    </ion-grid>
                    <!-- Bagian Progess Report -->
                    <h1>Progress Report</h1>
                    <ion-card v-if="result.length == 0" class="empty-state">
                        <ion-img
                            class="empty-img"
                            src="assets/icon/empty.png"
                        ></ion-img>
                        <div style="position: relative">
                            <ion-card-content>
                                There are no video yet
                            </ion-card-content>
                            <p class="title-empty">
                                You can add your video with the button in the
                                bottom right corner (maximum video size 10 MB).
                            </p>
                            <div class="empty-button">
                                <ion-button
                                    class="upload-vid"
                                    @click="setModalOpen(true)"
                                >
                                    <span class="material-symbols-outlined">
                                        video_call
                                    </span>
                                    <p
                                        class="upload-nav2"
                                        style="margin-left: 10px"
                                    >
                                        Upload Video
                                    </p>
                                </ion-button>
                            </div>
                        </div>
                    </ion-card>
                    <div
                        v-else
                        class="ProgressReport2"
                        style="margin-top: 30px"
                    >
                        <!-- Navigasi Tanggal -->
                        <!-- <div class="card progressreport" id="prke1">
                            <p>
                                <span class="material-symbols-outlined">
                                    chevron_left
                                </span>
                            </p>
                            <p>November 2022</p>
                            <p>
                                <span class="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </p>
                        </div> -->
                        <!-- Grafik Chart -->
                        <div class="chart" id="prke2">
                            <h1>Filler Words Count</h1>
                            <ion-grid>
                                <ion-row class="row-align-left">
                                    <ion-col size="2" class="ion-text-center"
                                        >No</ion-col
                                    >
                                    <ion-col size="3" class="ion-text-center"
                                        >Date</ion-col
                                    >
                                    <ion-col size="3" class="ion-text-center"
                                        >Filler Counts</ion-col
                                    >
                                    <ion-col size="4" class="ion-text-center"
                                        >Filler Words</ion-col
                                    >
                                </ion-row>
                                <div
                                    v-for="(item, index) in result
                                        .slice(0)
                                        .slice(-5)
                                        .reverse()"
                                    :key="item.email"
                                >
                                    <ion-row
                                        class="row-colored row-align-left ion-text-center"
                                        :style="
                                            index % 2 == 0
                                                ? 'background-color: #15cdcb'
                                                : 'background-color: #5280e2'
                                        "
                                    >
                                        <ion-col
                                            size="2"
                                            class="ion-text-center"
                                            >{{ index + 1 }}</ion-col
                                        >
                                        <ion-col
                                            size="3"
                                            class="ion-text-center"
                                            >{{
                                                // new Date(item.date)
                                                //     .toLocaleDateString("en-EN", {
                                                //         hour: "2-digit",
                                                //         minute: "2-digit",
                                                //         day: "2-digit",
                                                //         month: "short",
                                                //     })
                                                //     .replace(/AM|PM/, "")
                                                moment(item.date)
                                            }}</ion-col
                                        >
                                        <ion-col
                                            size="3"
                                            class="ion-text-center"
                                            >{{ item.filler }}</ion-col
                                        >
                                        <!-- {{ item.fillerWords }} -->
                                        <ion-col
                                            v-if="
                                                item.fillerWords
                                                    ? Object.keys(
                                                          item.fillerWords
                                                      ).length > 0
                                                    : false
                                            "
                                            size="4"
                                            class="ion-text-center"
                                            >{{
                                                // print array of filler words with comma

                                                Object.keys(
                                                    item.fillerWords
                                                ).join(", ")
                                            }}</ion-col
                                        >
                                        <ion-col
                                            class="ion-text-center"
                                            v-else
                                            size="4"
                                            >0</ion-col
                                        >
                                    </ion-row>
                                </div>
                            </ion-grid>
                        </div>
                        <!-- Filler Word Count -->
                        <ion-card class="progress-count" id="prke3">
                            <ion-card-content class="progress-title"
                                >Eye Contact Assesment</ion-card-content
                            >
                            <ion-grid>
                                <ion-row
                                    class="progress-table progress-title2 ion-justify-content-between"
                                >
                                    <ion-col size="5" size-sm="6" size-lg="5"
                                        >Date</ion-col
                                    >
                                </ion-row>
                                <div
                                    v-for="item in result
                                        .slice(0)
                                        .slice(-3)
                                        .reverse()"
                                    :key="item.email"
                                >
                                    <ion-row
                                        class="progress-table ion-justify-content-between"
                                    >
                                        <ion-col
                                            size="5"
                                            size-sm="6"
                                            size-lg="6"
                                            >{{ moment(item.date) }}</ion-col
                                        >
                                        <ion-col
                                            class="row-right"
                                            size="5"
                                            size-sm="6"
                                            size-lg="6"
                                            >{{ item.eyeContact }}</ion-col
                                        >
                                    </ion-row>
                                </div>
                            </ion-grid>
                        </ion-card>
                        <!-- Pacing Count -->
                        <ion-card
                            class="progress-count pacing-count"
                            id="prke4"
                        >
                            <ion-card-content class="progress-title"
                                >Pacing Count</ion-card-content
                            >
                            <ion-grid>
                                <ion-row
                                    class="progress-table progress-title2 ion-justify-content-between"
                                >
                                    <ion-col size="5" size-sm="4" size-lg="5"
                                        >Date</ion-col
                                    >
                                    <ion-col
                                        class="row-right"
                                        size="6"
                                        size-sm="7"
                                        size-lg="6"
                                        >Pacing (word/min)</ion-col
                                    >
                                </ion-row>
                                <div
                                    v-for="item in result
                                        .slice(0)
                                        .slice(-3)
                                        .reverse()"
                                    :key="item.email"
                                >
                                    <ion-row
                                        class="progress-table ion-justify-content-between"
                                    >
                                        <ion-col size="5">{{
                                            moment(item.date)
                                        }}</ion-col>
                                        <ion-col class="row-right" size="6">{{
                                            item.pacing
                                        }}</ion-col>
                                    </ion-row>
                                </div>
                            </ion-grid>
                        </ion-card>
                    </div>
                    <!-- Bagian Samplespeech -->
                    <h1>Sample Speech</h1>

                    <div class="samplespeech">
                        <ion-modal
                            id="sample-modal"
                            ref="modal"
                            trigger="open-modal-upload"
                            :is-open="isSampleModalOpen"
                        >
                            <div class="video">
                                <iframe
                                    src="/assets/samplespeech/yintro.mp4"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </ion-modal>
                        <ion-card>
                            <a @click="setSampleModalOpen(true)">
                                <img
                                    alt="Silhouette of mountains"
                                    src="/assets/img/yintro.jpg"
                                />
                            </a>
                            <ion-card-content>
                                Y-Combinator CF Matching Introduction Buenyamin
                                Kartal
                            </ion-card-content>
                        </ion-card>
                    </div>
                    <ion-footer class="ion-no-border">
                        <ion-toolbar>
                            <ion-title>
                                <span style="color: #3f54d1">
                                    © 2022 Bicara.ai
                                </span>
                                | Policy</ion-title
                            >
                        </ion-toolbar>
                    </ion-footer>
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
    IonTitle,
    IonToolbar,
    IonInput,
    IonModal,
    IonPopover,
    IonImg,
    IonAvatar,
    IonList,
    IonCard,
    IonCardContent,
    IonCol,
    IonRow,
    IonGrid,
    IonFooter,
    IonAlert,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";
import moment from "moment";

export default defineComponent({
    name: "DashBoard",
    components: {
        IonButton,
        IonContent,
        IonPage,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonInput,
        IonModal,
        IonPopover,
        IonImg,
        IonAvatar,
        IonList,
        IonCard,
        IonCardContent,
        IonCol,
        IonRow,
        IonGrid,
        IonFooter,
        IonAlert,
    },
    data() {
        return {
            isDragging: false,
            file: "",
            sessionEmail: "",
            sessionName: "",
            result: [],
            EyeContactMsg: "",
            FillerWord: "",
            FillerWords: "",
            Pacing: "",
            date: "",
            isModalOpen: false,
            isLoading: false,
            isSampleModalOpen: false,
            size: 0,
        };
    },

    methods: {
        setModalOpen(isModalOpen: boolean) {
            this.isModalOpen = isModalOpen;
        },
        setSampleModalOpen(isSampleModalOpen: boolean) {
            this.isSampleModalOpen = isSampleModalOpen;
        },
        moment: function (date: Date) {
            return moment(date).subtract(7, "hours").format("HH:mm / DD MMM");
        },
        logoutMethod() {
            localStorage.removeItem("email");
            localStorage.removeItem("name");
            this.$router.push("/homepage");
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
            this.size = e.target.files[0].size;
            if (this.size > 110000000) {
                alert("File size is too large");
                return;
            } else {
                (
                    document.getElementById("upload_button") as HTMLInputElement
                ).disabled = false;
            }
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
                .post(process.env.VUE_APP_BASE_URL + "/api/upload", formData, {
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
        document.addEventListener("click", (e) => {
            if (e.target != document.querySelector("#example-modal")) {
                this.setModalOpen(false);
            }
            if (e.target != document.querySelector("#sample-modal")) {
                this.setSampleModalOpen(false);
            }
        });
        //   axios
        //       .get(process.env.VUE_APP_BASE_URL + "/api/signin")
        //       .then((res) => {
        //           console.log(res);
        //           // if (res.data.status === "success") {
        //           //     localStorage.setItem("email", res.data.email);
        //           //     this.sessionEmail = res.data.email;
        //           // } else {
        //           //     window.location.href = "/homepage";
        //           // }
        //       })
        //       .catch((err) => {
        //           window.location.href = "/homepage";
        //           console.log(err);
        //       });
        //   // local storage email
        this.sessionEmail = localStorage.getItem("email") ?? "";
        this.sessionName = localStorage.getItem("name") ?? "";
        axios
            .get(process.env.VUE_APP_BASE_URL + "/api/signin")
            .then((res) => {
                if (this.sessionEmail == "") {
                    window.location.href = "/homepage";
                } else {
                    console.log("User not logged in");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(
                process.env.VUE_APP_BASE_URL +
                    "/api/result/" +
                    this.sessionEmail
            )
            .then((response) => {
                this.result = response.data.result;
                this.EyeContactMsg = this.result.slice(-1)[0]["eyeContact"];
                this.FillerWord = this.result.slice(-1)[0]["filler"];
                this.Pacing = this.result.slice(-1)[0]["pacing"];
                this.date = this.result.slice(-1)[0]["date"];
                this.date = new Date(this.date).toLocaleDateString("en-EN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });
                this.FillerWords = this.result.slice(-1)[0]["fillerWords"];
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get(
                process.env.VUE_APP_BASE_URL + "/api/user/" + this.sessionEmail
            )
            .then((response) => {
                console.log(response);
                let name =
                    response.data.firstName + " " + response.data.lastName;
                console.log(name);
                localStorage.setItem("name", name);
            })
            .catch((error) => {
                console.log(error);
            });
    },
});
</script>

<style scoped>
iframe {
    height: 100%;
    width: 100%;
    border: none;
    position: absolute;
}
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
ion-modal#sample-modal {
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

.intro-mobile,
.intro-mobile-2 {
    display: none;
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

.aside a:nth-child(3) {
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
    margin-top: 20px;
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

.aside a:nth-child(3):hover {
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
    margin-left: 8px;
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

.scoretitle {
    margin-top: 5px;
    margin-right: 10px;
    font-size: 20px;
    padding-top: 5px;
    padding-bottom: 3px;
    margin: 0;
}

.bintang {
    font-size: 1.7em !important;
    margin-left: 20px;
    margin-top: 3px;
}

/* .isicontent */

ion-card {
    --background: #e4eaeffe;
    --color: black;
    border-radius: 10px;
    box-shadow: none;
    margin: 0;
}

ion-card-content {
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
}

ion-card ion-row ion-col,
ion-card ion-row {
    margin: 0;
    padding: 0;
}

ion-card ion-row ion-col ion-card-content {
    text-align: center;
}

ion-col p {
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
}

/* Detail Intonasi */
.dot {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: inline-block;
    margin-top: 10px;
    margin-right: 13px;
}

.mobile-rating {
    display: none;
    padding: 10px;
    border-radius: 15px;
}

.detail-title {
    font-size: 18px;
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    margin: 5px;
    text-align: left;
}

.detail-persen {
    font-size: 24px;
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    margin: 5px;
    text-align: left;
}

.mobile-rating div div {
    text-align: left;
    color: #ffffff;
    border-radius: 15px;
    margin: 5px;
    padding: 5px 10px;
    width: 98%;
    display: flex;
    justify-content: space-between;
}

.detail {
    display: flex;
    justify-content: left;
    margin-left: 33px;
}
.detail p {
    margin: 15px 0 3px;
    font-size: 24px;
}

.val {
    margin: 15px 0px;
    font-size: 24px;
    padding-left: 65px;
    text-align: left;
}

.detailborder {
    border-right: 1px solid rgb(191, 187, 187);
}

.upload-rating {
    margin: 0px;
    padding-top: 5px;
    padding-bottom: 5px;
}

.scorestar {
    margin: 0px;
}

.progessline {
    margin: 20px auto;
    width: 78%;
    height: 16px;
    background-color: #ababab;
    border-radius: 10px;
}
.progessvalue {
    height: 16px;
    border-radius: 10px;
}

.previous-vid {
    color: black;
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin-right: 10px;
}

.inton {
    background-color: #3f54d1;
}
.pronun {
    background-color: #5280e2;
}

.grammar {
    background-color: #15cdcb;
}

.eyecontact {
    background-color: #4fe0b5;
}
/* Empty State */
.empty-state {
    width: 980px;
    height: 300px;
    margin: 30px 10px !important;
    padding: 30px;
    display: flex;
}

.empty-state ion-card-content {
    font-size: 30px;
    padding: 0px !important;
    margin-top: 20px;
}

.empty-state .title-empty {
    font-size: 20px;
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 600;
    /* line-height: 27px; */
    color: #6e7071;
}

.empty-button {
    position: absolute;
    bottom: 0;
    right: 0;
}

.empty-img {
    width: 180px;
    margin-right: 30px;
    margin-left: 5px;
}

/* CSS CHART */
.chart {
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    background-color: #e4eaeffe;
    color: black;
    border-radius: 10px;
    text-align: center;
    margin: 0;
    justify-content: center;
    width: 100%;
    height: 400px;
    position: relative;
}

.chart h1 {
    font-size: 24px;
    text-align: left;
    margin-left: 35px;
}

.row-align-left {
    padding-left: 15px;
    text-align: left;
    margin: 15px;
}

.row-colored {
    background-color: #5280e2;
    border-radius: 15px;
    color: white;
}

.row-colored:nth-child(even) {
    background: #5280e2;
}
.row-colored:nth-child(odd) {
    background: #15cdcb;
}

.grafik {
    margin: auto;
    margin-left: 50px;
    z-index: 0;
}
.starline {
    border-top: 2px solid rgb(182, 182, 182);
    width: 500px;
    height: 50px;
}

.s1 {
    border-bottom: 2px solid rgb(182, 182, 182);
}
.starline p {
    right: 5px;
    margin: 0px;
    margin-right: -580px;
    margin-top: -18px;
}

.grafiky {
    position: absolute;
    margin: 77px auto;
    /* margin-left: 50px; */
    width: 500px;
    height: 250px;
    z-index: 100;
    display: flex;
    gap: 68px;
}

.fillline {
    width: 17px;
    border-radius: 10px;
}

.filllinestar {
    width: 17px;
    border-radius: 10px;
    position: absolute;
    bottom: 0;
}

.fillline .filllinestar:nth-child(odd) {
    background-color: #3f54d1;
}
.fillline .filllinestar:nth-child(even) {
    background-color: #4fe0b5;
}

.fillline p {
    position: absolute;
    bottom: -58px;
    margin-left: -13px;
}

.progressreport {
    padding-bottom: 0px;
    display: flex;
    justify-content: space-between;
}
.progressreport p {
    font-size: 20px;
    margin: 0px;
    margin-top: 5px;
    padding: 0px;
    padding-bottom: 5px;
}

.progressreport p span {
    padding: 0px 5px;
    padding-top: 5px;
}

.progress-count {
    --background: #e4eaeffe;
    --color: black;
    padding: 10px 15px;
    width: 100%;
    height: 195px;
}

.progress-table {
    border-bottom: 0.5px solid grey;
    padding-top: 4px;
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 15px;
    font-weight: 500;
}

.row-right {
    text-align: right;
}

.progress-title {
    font-size: 20px;
    text-align: left;
    font-family: "Segoe UI", Arial, sans-serif;
    padding: 12px;
}

.progress-title2 {
    color: #ababab;
}

.samplespeech {
    margin: 30px auto;
    height: 350px;
    overflow-x: scroll;
    display: flex;
}

.samplespeech ion-card {
    width: 280px;
    min-width: 280px;
    height: 310px;
    margin: auto 10px;
    margin-bottom: 20px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 4px rgba(132, 132, 132, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
}

::-webkit-scrollbar {
    /* width: 5px; */
    height: 7px;
    background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #5280e2;
}

::-webkit-scrollbar-thumb:hover {
    background: #6a90e3;
}

ion-footer ion-toolbar {
    --background: white;
    margin: 20px;
    width: auto;
}
ion-footer ion-toolbar ion-title {
    font-size: 15px;
    text-align: center;
}

.samplespeech ion-card ion-card-content {
    text-align: center;
}

/* Progress Report Grid*/
#prke1 {
    grid-area: prke1;
}
#prke2 {
    grid-area: prke2;
}
#prke3 {
    grid-area: prke3;
}
#prke4 {
    grid-area: prke4;
}
.ProgressReport2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        " prke1 . ."
        "prke2 prke2 prke3"
        "prke2 prke2 prke4";
    grid-gap: 12px;
    margin: 10px;
}

@media (max-width: 992px) {
    .content {
        width: 576px;
    }

    .upload-rating {
        font-size: 18px;
    }
    .upload-nav {
        display: none;
    }
    .none {
        border-right: none;
    }

    .dot {
        margin: 0px !important;
        height: 18px;
        width: 18px;
        margin-right: 10px !important;
        margin-top: 8px !important;
    }
    .detail {
        margin-left: 20px;
    }

    .detail p {
        font-size: 20px;
    }

    .scoretitle {
        padding-top: 5px;
        padding-bottom: 3px;
        padding-right: 3px;
        margin: 0;
        font-size: 18px;
    }

    .bintang {
        font-size: 28px !important;
        margin-left: 5px !important;
    }

    .val {
        font-size: 20px;
        padding-left: 30px;
    }
    /* .detailborder {
    border-bottom: 1px solid rgb(191, 187, 187);
  } */
    /* .none2 {
    border-bottom: none;
  } */

    .ProgressReport2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "prke2 prke2"
            "prke3 prke4";
        grid-gap: 12px;
        margin: 10px;
    }

    .progressreport {
        display: none;
    }

    .chart {
        width: 556px;
        height: fit-content;
    }

    .progress-count {
        height: fit-content;
    }

    .grafik {
        margin: auto;
        margin-left: 50px;
        z-index: 0;
    }
    .starline {
        border-top: 2px solid rgb(182, 182, 182);
        width: 400px;
        height: 41px;
    }

    .s1 {
        border-bottom: 2px solid rgb(182, 182, 182);
    }
    .starline p {
        right: 5px;
        margin: 0px;
        margin-right: -480px;
        margin-top: -15px;
    }

    .grafiky {
        position: absolute;
        margin: 55px auto;
        width: 400px;
        height: 204px;
        z-index: 100;
        display: flex;
        gap: 48px;
    }

    .fillline {
        width: 15px;
        border-radius: 10px;
    }

    .filllinestar {
        width: 15px;
    }

    .fillline p {
        position: absolute;
        bottom: -58px;
        margin-left: -13px;
    }

    .empty-state {
        width: 556px;
        margin: 30px 10px;
    }

    .empty-img {
        margin-right: 15px;
        width: 310px;
    }
    .empty-state ion-card-content {
        font-size: 24px;
    }
    .title-empty {
        font-size: 18px;
    }

    .previous-vid {
        font-size: 18px;
    }
}

@media (max-width: 576px) {
    .background-mobile {
        position: absolute;
        z-index: -1000;
        background-color: #3f54d1;
        border-radius: 50%;
        width: 2000px;
        height: 480px;
        left: -800px;
        top: -60px;
        background: linear-gradient(
            180deg,
            #3f54d1 56.78%,
            rgba(63, 84, 209, 0.26) 100%
        );
    }

    .intro-mobile {
        z-index: 0;
        width: 90%;
        margin: 20px 20px 25px;
        font-family: "Segoe UI";
        font-size: 24px;
        display: block;
        color: #ffffff;
    }

    .intro-mobile-2 {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #3f54d1;
        padding: 10px 20px;
        padding-bottom: 0px;
        width: 100%;
        margin: 0px;
        z-index: 200;
    }
    .intro-mobile-2 h1 {
        margin-top: 2px;
        color: #ffffff;
        font-family: "Krona One", sans-serif;
        font-weight: 400;
        font-size: 24px;
    }

    .search-mobile {
        box-shadow: none;
        background-color: white;
        border-radius: 30px;
        font-size: 20px;
        display: flex;
        margin-top: 15px;
    }

    .search-mobile span {
        color: black;
        margin: 4px 10px;
    }

    .lastsidebar {
        bottom: 3px !important;
    }

    .scoretitle {
        padding-top: 7px !important;
    }

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

    .upload-rating {
        display: none;
    }

    .ProgressReport2 {
        display: grid;
        grid-template-columns: 93vw;
        grid-template-rows: auto;
        grid-template-areas:
            "prke2"
            "prke3"
            "prke4";
        grid-gap: 12px;
        margin: 9px;
    }

    .card p span {
        font-size: 1.7em !important;
        margin-left: 10px;
    }

    ion-card-content {
        padding: 10px;
        font-size: 18px;
    }

    .filler-word,
    .pacing-word {
        display: none;
    }

    .mobile-rating {
        display: block;
    }

    .chart {
        width: 93vw;
        height: fit-content;
        font-size: 14px;
    }

    .grafik {
        margin: auto;
        margin-left: 7vw;
        z-index: 0;
    }
    .starline {
        border-top: 2px solid rgb(182, 182, 182);
        width: 70vw;
        height: 8vw;
    }

    .s1 {
        border-bottom: 2px solid rgb(182, 182, 182);
    }
    .starline p {
        right: 5px;
        margin: 0px;
        margin-right: -85vw;
        margin-top: -3.8vw;
    }

    .grafiky {
        position: absolute;
        margin: 9.8vw auto;
        margin-left: 6vw;
        width: 75vw;
        height: 40vw;
        z-index: 100;
        display: flex;
        gap: 8vw;
    }

    .fillline {
        width: 3vw;
        border-radius: 10px;
    }

    .filllinestar {
        width: 3vw;
    }

    .fillline p {
        position: absolute;
        bottom: -9.9vw;
        margin-left: -3vw;
    }

    .empty-state {
        width: 93vw;
        height: 60vw;
        padding: 3vw !important;
    }

    .empty-state ion-card-content {
        font-size: 4vw !important;
        margin: 2vw 0vw;
    }
    .title-empty {
        font-size: 3.8vw !important;
    }

    .empty-button span {
        font-size: 4.5vw !important;
    }
    .upload-nav2 {
        font-size: 3.8vw !important;
        margin: 0px !important;
        margin-left: 10px !important;
    }

    .empty-button .upload-vid {
        height: 10vw;
        width: 38vw;
        padding: 5px !important;
    }

    .previous-vid {
        font-size: 16px;
    }
}
</style>
