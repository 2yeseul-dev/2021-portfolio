// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import javascriptIcon from "./images/javascript.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Yeseul Lee",
  headerTagline: [
    //Line 1 For Header
    "백엔드 개발자, 이예슬 입니다."
  ],
  //   Header Paragraph
  headerParagraph1:
    "당신과 나 모두를 위한 개발을 지향합니다. 🙌",

  headerParagraph2: "좋은 코드를 위해 끊임없이 공부하고 노력하는 개발자가 되고싶습니다.",


  //Contact Email
  contactEmail: "2yeseul95@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "스팟버디", //Project Title - Add Your Project Title Here
      para:
        "함께 직관을 즐기면서 응원할 뿐 아니라, 여행까지 동행할 친구를 찾아보세요. - 야구 직관 동행 서비스", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZK6Sz%2Fbtq3UjCM2Qr%2F1kBWCJfo7eLGqLcG7yqL1k%2Fimg.png",
      //Project URL - Add Your Project Url Here
      url: "https://www.notion.so/2yeseul/9877de1f474c47278f7a79bf9a237553",
    },
    {
      title: "앉는 카페", //Project Title - Add Your Project Title Here
      para:
        "대학생들을 위한, 대학교 근처 카페의 실시간 인원 수를 알려주는 서비스", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0LP5s%2Fbtq3yKgZjLI%2Fy53vO4WLFuGQNUziR0Y8h0%2Fimg.jpg",
      url: "https://www.notion.so/2yeseul/e137d94a46174c5eaea3a61b83eae731",
    },
    {
      title: "Easy Baseball", //Project Title - Add Your Project Title Here
      para:
        "응원하는 야구팀에 대한 맞춤 서비스 제공 및 직관 승패 기록 서비스", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOngw3%2Fbtq3z6jwieL%2FSkh0HACaYeNiKvbOWTdc6K%2Fimg.png",
      //Project URL - Add Your Project Url Here
      url: "https://www.notion.so/2yeseul/Easy-Baseball-5155794ad57a4a86a3b686fb8dbd51ae",
    },
  
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "스프링과 JPA를 통한 백엔드 개발에 관심이 많고, 좀 더 좋은 코드를 위해 항상 공부하려 합니다. 에러나 새롭게 알게된 사실에 대해 기록하려 노력합니다. 또한 어려운 구현일지라도 절대 포기하지 않습니다. ",
  aboutParaTwo:
    "같이 일하고 싶은 개발자를 꿈꿉니다. 상대방의 문제나 오류를 바로 해결해줄 수 없을지는 몰라도, 옆에서 같이 고민해주고 싶습니다. 상대방의 의견을 항상 존중하고, 경청하려 합니다.",
  aboutParaThree: 
    "자바와 스프링을 통해 주로 개발하지만, 다른 언어나 프레임워크에도 관심이 있습니다.",

  aboutImage:
    "https://avatars.githubusercontent.com/u/43533905?v=4",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      para:
        "Spring Security를 통해 인증 및 권한을 부여할 수 있습니다. 또한 Model, Controller, 비즈니스 로직의 분리를 통한 REST API를 개발과, 개발한 API를 JUnit을 통해 테스트할 수 있습니다. 개발한 API는 Spring Rest Docs를 통해 명세할 수 있습니다.",
    },
    {
      img: "https://codein.software/img/hibernate.png",
      para:
        "Spring Data JPA를 통해 이용하여 개발하고자 하는 API의 조건에 맞도록 Repository의 메소드를 통해 쿼리를 실행할 수 있습니다. 영속성 컨텍스트와 영속성 전이 과정 및 Transaction을 이해합니다. 또한 Entity간의 매핑 시 발생할 수 있는 N+1 문제를 해결할 수 있습니다. ",
    },
    {
      img: "https://media.vlpt.us/images/hyojeong_sss/post/f2b1c64c-fca9-40b2-93ab-60fa9e040087/MySQL-Logo.wine.png",
      para:
        "Database를 구축할 수 있고, 쿼리를 통해 원하는 조건의 데이터들을 출력할 수 있습니다. ",
    },
    {
      img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      para:
        "Git을 통해 버전관리를 할 수 있고, 기본적인 기능들을 무리없이 이용할 수 있습니다. github action을 통해 특정 시간마다 스케줄링 작업을 수행하도록 할 수 있습니다. 올해 1일 1커밋을 목표로 열심히 커밋중입니다 🌱😁",
    },
    {
      img: javascriptIcon,
      para:
        "익숙한 언어는 아니지만, 코드를 보고 이해하거나 기본적인 코드를 작성할 수 있습니다.",
    },

    {
      img: "https://media.vlpt.us/images/pm1100tm/post/d9571703-745d-4421-9c15-283dc9eb7ef5/aws.png",
      para:
        "EC2를 통해 프로젝트를 배포하고, RDS를 통해 Database를 관리할 수 있습니다. 또한 S3를 통해 정적파일을 관리할 수 있습니다.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // End Promotion Section -----------------

  //   Contact Section --------------


  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/2yeseul" },

    {img : "https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-22-512.png" , url : "https://seulog.netlify.app/"}

  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
