<template>
  <div class="w-full mx-auto max-w-4xl">
    <!-- 소개 -->
    <section class="pt-12 text-font dark:text-font-dark">
      <h2 class="text-5xl font-bold mb-3">이태규</h2>
      <h3 class="text-3xl font-medium mb-6">Front-end Engineer</h3>
      <p class="leading-8 word-keep">
        3년간의 웹 퍼블리셔 경험을 갖고 있는 3년차 프론트엔드 개발자입니다.<br />
        단순히 개발만하는 것보다는 서비스 관련 지식에 대해 충분히 이해하고<br />
        비지니스에 동참해서 주도적으로 일할 수 있는 환경을 선호합니다.<br />
        비지니스와 함께 서로 같이 성장할 수 있는 팀을 찾고 있습니다.
      </p>
      <ul class="mt-5">
        <li class="flex item-center">
          <MailIcon class="h-5 w-5 mr-2" />
          <a href="mailto:koallazon@gmail.com" class="underline"
            >koallazon@gmail.com</a
          >
        </li>
        <li class="flex item-center mt-1">
          <a
            href="https://github.com/koallazon"
            target="_blank"
            class="flex item-center underline"
            ><span class="github-icon"></span>Github</a
          >
        </li>
      </ul>
    </section>
    <!-- 경력 -->
    <section id="career" class="text-font dark:text-font-dark my-20">
      <h3 class="text-3xl font-bold mb-5">경력</h3>
      <CareerCompany v-for="(career, i) in careers" :key="i" :item="career" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import CareerCompany from "../../components/CareerCompany.vue";
import { MailIcon } from "@heroicons/vue/solid";
import { ICareer } from "../../types";
export default defineComponent({
  name: "Home",
  components: {
    CareerCompany,
    MailIcon,
  },
  setup() {
    const careers: ICareer[] = reactive([
      {
        companyName: "빵야네트웍스",
        period: "2020-04 ~ 재직 중",
        role: "Front-end Engineer",
        introduce:
          "동시 접속자 10만명, 글로벌 티켓사 20개 연동,<br/> K-POP 라이브 콘서트 플랫폼 서비스 스타트업",
        project: [
          {
            title: "BBangya TV",
            date: "2020-05 ~ 2022-04",
            desc: "글로벌 라이브 방송 플랫폼",
            url: "https://www.bbangyatv.com",
            performance: [
              "서비스 런칭, 전반적으로 프론트엔드 설계/구현/배포",
              "10만명의 이용자가 동시에 연속적으로 chat 또는 likes 기능을 사용 시 발생하는 브라우저 성능 이슈를 해결한 경험이 있습니다.",
              "점점 서비스가 복잡해짐에 따라 상태관리 모듈화를 통해서 유지보수성을 향상시켰습니다.",
              "JWT를 이용한 인증",
              "PG사를 통한 결제 구현",
              "Native WebView와 통신하기 위한 JS Bridge 설계/구현",
              "GitHub Actions 을 통한 CI/CD",
              "백엔드 개발과 병행하거나 프론트엔드 선 개발 시 실제 API 수준으로 Mocking(JSON, lowdb, express)을 구현해서 업무 효율성을 향상시켰습니다.",
              "Jest 기반의 테스트 작성",
            ],
          },
          {
            title: "대입용",
            date: "2020-02 ~ 2020-03",
            desc: "대학입시 정보 웹사이트, 현재는 서비스 중단 상태",
            performance: [
              "Vuetify를 이용해서 1주만에 빠르게 구현한 반응형 웹",
              "Nginx, pm2를 사용해서 배포",
            ],
          },
        ],
      },
      {
        companyName: "오피스허브",
        period: "2017-07 ~ 2020-04",
        role: "Web Publisher & 기획/디자인 팀장",
        introduce: "300여개의 고객사, 그룹웨어 '오피스허브' 서비스 스타트업",
        project: [
          {
            title: "그룹웨어 연동 메신저",
            date: "2019-02 ~ 2020-02",
            desc: "그룹웨어와 연동되는 메신저",
            performance: [
              "앱 서비스 기획/퍼블리싱/배포",
              "PC앱 채팅 메시지 조회, 조직도 조회 속도 최적화",
              "PC앱 유지보수",
            ],
          },
          {
            title: "그룹웨어",
            date: "2017-07 ~ 2020-04",
            desc: "복합기 연동에 특화된 그룹웨어 업무 플랫폼",
            performance: [
              "전반적인 그룹웨어 서비스 기획, UI 설계/구현",
              "성과를 통해 입사 2년차에 기획/디자인 팀장으로 진급",
              "반응형 웹 최적화",
              "전자메일, 일정관리 UI 리뉴얼(기여도 100%)",
              "GitLab 을 통한 CI/CD 배포",
            ],
          },
        ],
      },
    ]);

    return {
      careers,
    };
  },
});
</script>

<style scoped>
.github-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-image: url("../../assets/icons8-github.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.dark .github-icon {
  background-image: url("../../assets/icons8-github_dark.svg");
}
</style>
