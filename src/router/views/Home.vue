<template>
  <div class="w-full mx-auto max-w-4xl py-10 px-4 tablet:px-0">
    <!-- 소개 -->
    <section class="tablet:pt-12 text-font dark:text-font-dark">
      <h2 class="text-2xl tablet:text-5xl font-bold mb-3">이태규</h2>
      <h3 class="text-xl tablet:text-3xl mb-6">Front-end Engineer</h3>
      <p class="text-sm leading-7 tablet:text-base tablet:leading-9 word-keep">
        단순히 개발만하는 것보다는 서비스 관련 지식에 대해 충분히 이해하고<br />
        비지니스에 동참해서 주도적으로 일할 수 있는 환경을 선호합니다.<br />
        함께 서로 같이 성장할 수 있는 팀을 찾고 있습니다.
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
    <section id="career" class="text-font dark:text-font-dark mt-20">
      <h3 class="text-xl tablet:text-3xl font-bold mb-6">경력</h3>
      <CareerCompany v-for="(career, i) in careers" :key="i" :item="career" />
    </section>
    <!-- 기술 -->
    <section id="skill" class="text-font dark:text-font-dark mt-20">
      <h3 class="text-xl tablet:text-3xl font-bold mb-6">기술</h3>
      <Skill v-for="(skill, i) in skills" :key="i" :item="skill" />
    </section>
    <!-- 교육 및 자격증-->
    <section id="edu_license" class="text-font dark:text-font-dark mt-20">
      <h3 class="text-xl tablet:text-3xl font-bold mb-6">교육 / 자격증</h3>
      <EduLicense v-for="(edu, i) in educations" :key="i" :item="edu" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import CareerCompany from "../../components/CareerCompany.vue";
import Skill from "../../components/Skill.vue";
import EduLicense from "../../components/Education.vue";
import { MailIcon } from "@heroicons/vue/solid";
import { ICareer, ISkill, IEdu } from "../../types";
export default defineComponent({
  name: "Home",
  components: {
    CareerCompany,
    Skill,
    EduLicense,
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
            skill: ["Vue", "Vuex", "Vuetify", "WebSocket", "AWS S3", "Github"],
            performance: [
              "서비스 런칭, 전반적으로 프론트엔드 설계/구현/배포",
              "Virtual DOM을 이용한 브라우저 렌더링 성능 최적화",
              "서비스의 복잡성이 올라감에 따라 상태관리 library를 모듈화",
              "JWT를 이용한 인증",
              "PG사를 통한 결제 구현",
              "Native WebView와 통신하기 위한 JS Bridge 설계/구현",
              "실제 API 수준의 Mocking(JSON, lowdb, express)개발 환경 구성",
              "Jest 기반의 테스트 작성",
              "GitHub Actions 을 통한 CI/CD",
            ],
          },
          {
            title: "대입용",
            date: "2020-02 ~ 2020-03",
            desc: "대학입시 정보 웹사이트",
            skill: ["Nuxt", "Vuex", "vuetify", "Nginx"],
            performance: [
              "UI Framework(Vuetify)를 이용해서 빠르게 구현한 반응형 웹",
              "Nginx, pm2를 사용해서 배포",
            ],
          },
        ],
      },
      {
        companyName: "오피스허브",
        period: "2017-07 ~ 2020-04",
        role: "Front-end Engineer & 기획/디자인 팀장",
        introduce: "300여개의 고객사, 그룹웨어 '오피스허브' 서비스 스타트업",
        project: [
          {
            title: "그룹웨어 연동 메신저",
            date: "2019-02 ~ 2020-02",
            desc: "그룹웨어와 연동되는 메신저",
            skill: ["Vue", "Electron", "FireBase FireStore"],
            performance: [
              "엡 기획/퍼블리싱/서비스 런칭",
              "Desktop App 채팅 메시지 조회, 조직도 조회 속도 최적화",
              "Desktop App 유지보수",
            ],
          },
          {
            title: "그룹웨어",
            date: "2017-07 ~ 2020-04",
            desc: "복합기 연동에 특화된 그룹웨어 업무 플랫폼",
            skill: ["HTML5", "CSS3", "jQuery", "PHP"],
            performance: [
              "전반적인 그룹웨어 서비스 기획, UI 설계/구현",
              "성과를 통해 입사 2년차에 기획/디자인 팀장으로 진급",
              "반응형 웹 최적화",
              "전자메일, 일정관리 리뉴얼(기여도 50%)",
              "GitLab 을 통한 CI/CD 배포",
            ],
          },
        ],
      },
    ]);

    const skills: ISkill[] = reactive([
      {
        subject: "Web",
        content: [
          {
            title: "Sass(Scss) 등의 CSS Preprocessor를 사용할 수 있습니다.",
          },
          {
            title: "반응형 웹 제작에 능숙합니다.",
          },
          {
            title: "다양한 브라우저(Chrome, Safari, IE)를 지원할 수 있습니다.",
          },
          {
            title: "SEO(Search Engine Optimization) 적용 경험이 있습니다.",
          },
          {
            title:
              "웹 앱 기반 브라우저(Android Chrome, iOS Safari WebView)에서 트러블 슈팅 경험이 있습니다.",
          },
        ],
      },
      {
        subject: "Javascript",
        content: [
          {
            title: "Vanilla JavaScript를 활용해 DOM 조작하는 데 익숙합니다.",
          },
          {
            title:
              "reduce, map, filter 등 다양한 고차함수를 적극적으로 활용합니다.",
          },
          {
            title:
              "ES6 문법을 활용해 웹 어플리케이션을 개발하는 데 익숙합니다.",
          },
        ],
      },
      {
        subject: "Vue",
        content: [
          {
            title: "상태관리 라이브러리인 Vuex를 능숙하게 사용합니다.",
            desc: "비지니스 로직에 따라 적절하게 모듈화하는 것을 지향합니다.",
          },
          {
            title:
              "Vue 스타일가이드를 준수하며 합리적인 방식으로 컴포넌트를 분리해서 관리합니다.",
          },
          {
            title:
              "렌더링 최적화를 위해 라이프사이클에 맞춰 데이터를 로딩합니다.",
          },
          {
            title:
              "Jest와 Vue Test Utils Library를 사용하여 테스트 코드 작성 경험이 있습니다.",
          },
        ],
      },
      {
        subject: "DevOps",
        content: [
          {
            title: "Github actions 배포를 자동화한 경험이 있습니다.",
            desc: "코드 문법 검사 후 Unit Test 결과에 따라 배포를 하고 Slack으로 배포 결과를 받는 서비스를 구현한 경험이 있습니다.",
          },
          {
            title:
              "Nginx와 Docker를 사용해서 AWS 인프라(EC2, ECS, S3, CloudFront)에 배포한 경험이 있습니다.",
          },
          {
            title: "Git, Github을 활용한 워크플로우 경험에 익숙합니다.",
          },
        ],
      },
      {
        subject: "Communication",
        content: [
          {
            title:
              "프로젝트를 완수하기 위해 적극적으로 팀원과 소통하기를 좋아합니다.",
          },
        ],
      },
    ]);

    const educations: IEdu[] = reactive([
      {
        subject: "정보처리기사",
        organ: "한국산업인력공단",
        period: "2019. 5",
      },
      {
        subject: "Vue 개발자 과정",
        organ: "Vue Mastery, Vue School",
        period: "2020. 10 ~",
        desc: "vue2, vue3의 초급/중급/심화과정 수료",
      },
      {
        subject: "프론트엔드 개발자 과정",
        organ: "그린 아키데미",
        period: "2016. 7 ~ 2017. 1",
        desc: "HTML5 마크업, CSS3 스타일링, 자바스크립트 동적구현, PHP 데이터 송/수신 처리, 게시판 구현, 로그인 기능 구현",
      },
    ]);

    return {
      careers,
      skills,
      educations,
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
