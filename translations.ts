
import { Language } from './types';

export const translations: Record<Language, any> = {
  en: {
    nav: {
      problems: "Problems",
      solution: "Solution",
      builders: "Builders",
      advertisement: "Advertisement",
      contact: "Contact",
      login: "Log in",
      getStarted: "Get Started"
    },
    hero: {
      tag: "Intelligent Data Management",
      titlePrefix: "Bring Your Enterprise Data",
      titleHighlight: "into One Intelligent System",
      subtitle: "From disconnected data sources to an intelligent unified platform. Automate integrations, spin up servers, and build custom dashboards effortlessly with DataCraft AI.",
      ctaPrimary: "Try the Builder",
      ctaSecondary: "Watch Architecture"
    },
    section1: {
      title: "Structural Limitations of Data Management and Realistic Alternatives",
      cards: {
        card1: {
          title: "1) Limit of Excel & Google Sheets",
          desc: "Files scattered, versions mixed, history hard to manage."
        },
        card2: {
          title: "2) Misfit of SaaS Tools",
          desc: "Good features, but forces you to adapt your workflow to the tool."
        },
        card3: {
          title: "3) Burden of Outsourcing (SI)",
          desc: "Perfect fit requires excessive cost, time, and operational burden."
        }
      },
      insight: "The problem isn't the 'tool', but the lack of a structure tailored to your team's way.",
      preCta: "Now, you need a new data platform that naturally absorbs your workflow.",
      solutionBlock: {
        tag: "DATACRAFT AI",
        title: "New Alternative: DataCraft Web Builder",
        desc: "We built a 'Data Management Builder' to solve this problem. Create screens and data configurations that fit your company perfectly at a reasonable cost.",
        customFit: "Custom Fit",
        lowCost: "Low Cost",
        builder: "Builder"
      }
    },
    section2: {
      title: "It's Not Technology Blocking AI, It's Scattered Data",
      searchTimeTitle: "Search Time per Week",
      source: "Source: IBM, McKinsey",
      impactTitle: "Impact of Fragmented Data",
      efficiencyLoss: "Work Efficiency Loss",
      dataLoss: "Lost Data Opportunities",
      siloTitle: "The Data Silo Reality",
      siloQuote: "\"We need to replace our equipment just to integrate data.\" — Manufacturing Client",
      erpTooltip: "Cannot access production data",
      mesTooltip: "Isolated from Finance"
    },
    section4: {
      // Kept for type safety if referenced, but content moved to section 5 logic
      leftTitle: "External System Data Integration",
      leftSub: "AI Agent Bot",
      rightTitle: "User Custom Web Builder",
      rightSub: "User Style & Workflow Optimization",
      flowLabel: "Auto Integration"
    },
    section5: {
      title: "Automated Workflow Designed Automatically with a Single Subscription",
      subtitle: "From document analysis to server generation and custom screen creation, everything is completed automatically.",
      step1: {
        tag: "STEP 01",
        title: "RAG AI Auto-Analysis",
        desc: "Upload API docs or manuals. AI automatically understands the system structure."
      },
      step2: {
        tag: "STEP 02",
        title: "Auto-Generated MCP Server (AI Agent)",
        desc: "AI builds standard servers to connect external systems (ERP, MES, etc.)."
      },
      step3: {
        tag: "STEP 03",
        title: "User Custom Web Builder",
        desc: "Instantly build a custom UI optimized for your workflow based on connected data.",
        sub: "User Custom Web Page"
      },
      autoIntegration: "AUTO INTEGRATION"
    },
    section6: {
      title: "Experience the 4 Builders",
      subtitle: "DataCraft AI provides 4 core builders. Select a builder type to visualize or try the interactive layout generator below.",
      builders: {
        layout: {
          title: "Layout Builder",
          desc: "Flexible grid system to arrange your workspace freely."
        },
        form: {
          title: "Form Builder",
          desc: "Drag & drop inputs to create data entry interfaces."
        },
        dataview: {
          title: "DataView Builder",
          desc: "Custom tables and charts to visualize your metrics."
        },
        relation: {
          title: "Relation Builder",
          desc: "Define complex relationships between data entities visually."
        }
      },
      demoInputLabel: "AI Layout Generator",
      demoPlaceholder: "e.g. A dark mode dashboard with analytics charts...",
      demoViewport: "Viewport Format",
      demoGenerate: "Generate Assets"
    },
    section7: {
      title: "Start Your Data Transformation",
      subtitle: "Ready to integrate your enterprise data? Contact our team for a personalized demo.",
      form: {
        name: "Name",
        email: "Work Email",
        company: "Company Name",
        message: "Message / Inquiry",
        submit: "Send Message",
        success: "Message Sent! We will contact you shortly."
      },
      contactInfo: {
        title: "Contact Us",
        email: "contact@datacraft.ai",
        phone: "+82 2-555-0123",
        address: "Teheran-ro, Gangnam-gu, Seoul, Korea"
      }
    },
    section8: {
      title: "6 Reasons Why You Need DataCraft",
      feeds: [
        {
          name: "Manager Kim (Ops Support)",
          content: "Still working in Excel? 😫\nThe start of inefficiency.",
          tags: "#ExcelHell #Inefficiency #Overtime"
        },
        {
          name: "IT Team Leader",
          content: "ERP, MES, Groupware...\nToo many disconnected tools? 🤯\nManage them all in one place.",
          tags: "#ITManagement #Integration #NoMoreChaos"
        },
        {
          name: "Sales Team",
          content: "Scolded by clients for wrong stock data? 📦\nNo more data mismatch!",
          tags: "#DataAccuracy #SalesUp #CustomerSat"
        },
        {
          name: "Service Planner",
          content: "Need dev approval to change UI? 🛑\nNow edit it yourself directly.",
          tags: "#PlannerFreedom #FastIter #Agile"
        },
        {
          name: "CEO",
          content: "Company status not visible at a glance? 🚀\nThis is real Data Management.",
          tags: "#CEO_Dashboard #RealTime #DecisionMaking"
        },
        {
          name: "Startup Founder",
          content: "Dev cost $50k,\nSaved with DataCraft. 💰\nSmartest early investment.",
          tags: "#Startup #CostCut #SmartChoice"
        }
      ]
    },
    footer: {
      contact: "Contact Sales",
      docs: "Documentation",
      privacy: "Privacy Policy",
      copyright: "© 2024 DataCraft AI Inc. All rights reserved."
    }
  },
  ko: {
    nav: {
      problems: "문제점",
      solution: "통합 솔루션",
      builders: "빌더",
      advertisement: "광고화면",
      contact: "문의하기",
      login: "로그인",
      getStarted: "시작하기"
    },
    hero: {
      tag: "지능형 데이터 관리",
      titlePrefix: "모든 데이터를",
      titleHighlight: "하나의 지능형 시스템으로",
      subtitle: "흩어진 데이터를 지능형 통합 플랫폼으로 전환하세요. DataCraft AI로 연결을 자동화하고, 서버를 생성하며, 맞춤형 웹 사이트를 손쉽게 구축할 수 있습니다.",
      ctaPrimary: "빌더 체험하기",
      ctaSecondary: "아키텍처 보기"
    },
    section1: {
      title: "데이터 관리의 구조적 한계와 현실적 대안",
      cards: {
        card1: {
          title: "1) 엑셀·구글시트 의 협업 한계",
          desc: "파일이 흩어지고, 버전은 섞이고, 이력 관리는 점점 어려워집니다."
        },
        card2: {
          title: "2) SaaS 툴의 맞지 않는 구조",
          desc: "기능은 좋지만, 결국 업무 방식을 도구에 맞춰야 합니다."
        },
        card3: {
          title: "3) 외주 개발(SI)의 부담",
          desc: "완벽하게 맞추려면 비용·시간·운영 부담이 지나치게 큽니다."
        }
      },
      insight: "문제는 ‘도구’가 아니라 우리 팀만의 방식에 맞춰진 구조가 없다는 것입니다.",
      preCta: "이제, 업무 방식이 그대로 녹아드는 새로운 데이터 플랫폼이 필요합니다.",
      solutionBlock: {
        tag: "DATACRAFT AI",
        title: "DataCraft Web Builder",
        desc: "우리는 '데이터 관리 빌더'를 만들었습니다. 복잡한 개발 없이도, 우리 회사 업무 방식에 맞는 데이터 구조와 화면을 사용자가 스스로 빠르고 합리적인 비용으로 만들어 사용할 수 있습니다",
        customFit: "Custom Fit",
        lowCost: "Low Cost",
        builder: "Builder"
      }
    },
    section2: {
      title: "AI를 막는 건 기술이 아니라, 흩어진 데이터 입니다.",
      searchTimeTitle: "주간 데이터 검색 시간",
      source: "출처: IBM, 매킨지",
      impactTitle: "파편화된 데이터의 영향",
      efficiencyLoss: "업무 효율성 저하",
      dataLoss: "데이터 활용 기회 손실",
      siloTitle: "데이터 사일로의 현실",
      siloQuote: "\"데이터 통합을 위해 설비 교체까지도 검토하고 있습니다.\" — 제조사 고객",
      erpTooltip: "생산 데이터 접근 불가",
      mesTooltip: "재무팀과 단절됨"
    },
    section4: {
      // Unused but kept for safety
      leftTitle: "외부 시스템 데이터 연동",
      leftSub: "AI 에이전트 봇",
      rightTitle: "사용자 커스텀 웹 빌더",
      rightSub: "사용자 스타일과 업무플로우 최적화",
      flowLabel: "Auto Integration"
    },
    section5: {
      title: "한 번의 구독으로 작업을 자동으로 설계하는 자동화 워크플로우",
      subtitle: "문서 분석부터 서버 생성, 그리고 사용자 맞춤형 화면까지 완성합니다.",
      step1: {
        tag: "STEP 01",
        title: "RAG AI 자동 분석",
        desc: "API 문서나 매뉴얼만 업로드하세요. AI가 시스템 구조를 자동으로 파악합니다."
      },
      step2: {
        tag: "STEP 02",
        title: "MCP 서버 자동 생성 (AI Agent)",
        desc: "외부 시스템(ERP, MES 등)과 연동할 수 있는 표준 서버를 AI가 구축합니다."
      },
      step3: {
        tag: "STEP 03",
        title: "사용자 커스텀 웹 빌더",
        desc: "연동된 데이터를 기반으로, 내 업무에 딱 맞는 UI를 즉시 제작합니다.",
        sub: "사용자 커스텀 데이터 관리 웹 페이지"
      },
      autoIntegration: "AUTO INTEGRATION"
    },
    section6: {
      title: "DataCraft만의 4가지 빌더 기능",
      subtitle: "사용자가 직접 화면과 데이터를 구성하기 위한 4가지 핵심 빌더를 제공합니다.",
      builders: {
        layout: {
          title: "Layout Builder",
          desc: "사용자가 화면 레이아웃을 유연하게 구성"
        },
        form: {
          title: "Form Builder",
          desc: "사용자가 입력화면을 자유롭게 꾸밀 수 있음"
        },
        dataview: {
          title: "DataView Builder",
          desc: "다양한 형태의 데이터를 표현할 수 있는 커스텀 테이블"
        },
        relation: {
          title: "Relation Builder",
          desc: "데이터간의 관계를 사용자가 원하는대로 설정"
        }
      },
      demoInputLabel: "AI 레이아웃 생성기",
      demoPlaceholder: "예: 분석 차트가 있는 다크 모드 대시보드...",
      demoViewport: "화면 비율",
      demoGenerate: "에셋 생성"
    },
    section7: {
      title: "데이터 혁신을 시작하세요",
      subtitle: "기업 데이터 통합에 대해 궁금하신 점이 있으신가요? 전문가와 상담해보세요.",
      form: {
        name: "이름",
        email: "업무용 이메일",
        company: "회사/소속",
        message: "문의 내용",
        submit: "메시지 보내기",
        success: "메시지가 전송되었습니다. 곧 연락드리겠습니다."
      },
      contactInfo: {
        title: "문의처",
        email: "contact@datacraft.ai",
        phone: "02-555-0123",
        address: "서울시 강남구 테헤란로"
      }
    },
    section8: {
      title: "DataCraft가 필요한 6가지 이유",
      feeds: [
        {
          name: "김대리 (경영지원)",
          content: "엑셀\n아직도 그렇게 쓰시나요? 😫\n이제는 파일 찾다가 하루가 갑니다... \n반복 입력, 버번 꼬임, 공유 스트레스 그만.",
          tags: "#업무자동화 #협업툴 #엑셀한계 #DataCraftAI"
        },
        {
          name: "전산팀장",
          content: "ERP, MES, 그룹웨어...\n흩어진 시스템 때문에 일이 더 복잡해졌다면... 🤯\n이제는 하나의 플랫폼으로 바꿀 때입니다.\n이제 모든 기능과 데이터를\n한 곳에서 통합 관리하세요",
          tags: "#솔루션통합 #업무자동화 #IT관리 #데이터통합 #플랫폼전환"
        },
        {
          name: "영업팀",
          content: "재고가 또 달라요?\n고객한테 혼나는 이유,\n사실 '사람'때문이 아닙니다.📦\n데이터가 한 곳에 모이면\n실수도, 누락도, 잘못된 보고도 사라집니다!",
          tags: "#데이터정합성 #영업관리 #스마트업무"
        },
        {
          name: "서비스 기획자",
          content: "화면 하나 바꾸는데\n개발팀 눈치 보시나요? 🛑\n이제 직접 수정하세요.",
          tags: "#기획자독립 #빠른수정 #애자일"
        },
        {
          name: "대표이사 CEO",
          content: "우리 회사 현황,\n한 눈에 안 들어오시죠? 🚀\n이게 진짜 데이터 경영입니다.",
          tags: "#경영대시보드 #실시간현황 #의사결정"
        },
        {
          name: "초기 창업자",
          content: "개발 비용 5천만원,\nDataCraft로 아꼈습니다. 💰\n가장 똑똑한 초기 투자.",
          tags: "#스타트업 #비용절감 #똑똑한선택"
        }
      ]
    },
    footer: {
      contact: "영업 문의",
      docs: "문서",
      privacy: "개인정보 처리방침",
      copyright: "© 2024 DataCraft AI Inc. All rights reserved."
    }
  }
};
