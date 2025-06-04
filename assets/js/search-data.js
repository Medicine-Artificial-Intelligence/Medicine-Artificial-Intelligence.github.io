// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-posts",
          title: "posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Our publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Our research projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-members",
          title: "members",
          description: "Members of our group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "dropdown-contact-us",
              title: "contact us",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/contacts/";
              },
            },{id: "members-tieu-long-phan",
          title: 'Tieu Long Phan',
          description: "TACsy Doctoral researcher - DCQ2013",
          section: "Members",handler: () => {
              window.location.href = "/members/D13_TieuLongPhan/";
            },},{id: "members-tuyet-minh-phan",
          title: 'Tuyet-Minh Phan',
          description: "CH2023 - DCQ2017",
          section: "Members",handler: () => {
              window.location.href = "/members/D17_TuyetMinhPhan/";
            },},{id: "members-gia-bao-truong",
          title: 'Gia-Bao Truong',
          description: "MSc candidate - EMJM Chemoinformatics+ 2025-2027 - DCQ2018",
          section: "Members",handler: () => {
              window.location.href = "/members/D18_GiaBaoTruong/";
            },},{id: "members-lai-hoang-son-le",
          title: 'Lai Hoang Son Le',
          description: "DCQ2018",
          section: "Members",handler: () => {
              window.location.href = "/members/D18_LaiHoangSonLe/";
            },},{id: "members-the-chuong-trinh",
          title: 'The-Chuong Trinh',
          description: "DCQ2018",
          section: "Members",handler: () => {
              window.location.href = "/members/D18_TheChuongTrinh/";
            },},{id: "members-xuan-truc-tran-dinh",
          title: 'Xuan-Truc Tran-Dinh',
          description: "DCQ2018",
          section: "Members",handler: () => {
              window.location.href = "/members/D18_XuanTrucTranDinh/";
            },},{id: "members-van-phuoc-chung-nguyen",
          title: 'Van Phuoc Chung Nguyen',
          description: "DCQ2019",
          section: "Members",handler: () => {
              window.location.href = "/members/D19-VanPhuocChungNguyen/";
            },},{id: "members-khanh-vy-vo-nguyen",
          title: 'Khanh-Vy Vo-Nguyen',
          description: "DCQ2019",
          section: "Members",handler: () => {
              window.location.href = "/members/D19_KhanhVyVoNguyen/";
            },},{id: "members-thanh-an-pham",
          title: 'Thanh-An Pham',
          description: "MSc candidate - EMJM Chemoinformatics+ 2024-2026 - DCQ2019",
          section: "Members",handler: () => {
              window.location.href = "/members/D19_ThanhAnPham/";
            },},{id: "members-van-thinh-to",
          title: 'Van-Thinh To',
          description: "MSc candidate - EMJM Chemoinformatics+ 2025-2027 - DCQ2019",
          section: "Members",handler: () => {
              window.location.href = "/members/D19_VanThinhTo/";
            },},{id: "members-dong-nghi-nguyen-hoang",
          title: 'Dong-Nghi Nguyen-Hoang',
          description: "DCQ2020",
          section: "Members",handler: () => {
              window.location.href = "/members/D20-DongNghiNguyenHoang/";
            },},{id: "members-hoang-huy-nguyen",
          title: 'Hoang-Huy Nguyen',
          description: "DCQ2020",
          section: "Members",handler: () => {
              window.location.href = "/members/D20-HoangHuyNguyen/";
            },},{id: "members-ngoc-tam-tran-nguyen",
          title: 'Ngoc-Tam Tran-Nguyen',
          description: "DCQ2020",
          section: "Members",handler: () => {
              window.location.href = "/members/D20-NgocTamTranNguyen/";
            },},{id: "members-nhu-ngoc-nguyen-song",
          title: 'Nhu-Ngoc Nguyen-Song',
          description: "DCQ2020",
          section: "Members",handler: () => {
              window.location.href = "/members/D20-NhuNgocNguyenSong/";
            },},{id: "members-quang-huy-le-nguyen",
          title: 'Quang-Huy Le-Nguyen',
          description: "DCQ2020",
          section: "Members",handler: () => {
              window.location.href = "/members/D20-QuangHuyLeNguyen/";
            },},{id: "members-tuyen-ngoc-truong",
          title: 'Tuyen Ngoc Truong',
          description: "Associate Professor - Head of Department of Organic Chemistry",
          section: "Members",handler: () => {
              window.location.href = "/members/TuyenNgocTruong/";
            },},{id: "projects-dissertations-amp-theses",
          title: 'Dissertations &amp;amp; Theses',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DissertationsTheses/";
            },},{id: "projects-medical-education-for-the-future-mef-generative-ai-study-multi-objective-approach-toward-de-novo-design-of-dual-egfr-and-vegfr-inhibitors",
          title: 'Medical Education for the Future (MEF): Generative AI study: Multi-objective approach toward de...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MEF1/";
            },},{id: "projects-medical-education-for-the-future-mef-prodock-a-comprehensive-automated-framework-for-molecular-docking-and-validation-for-small-molecules-and-peptides",
          title: 'Medical Education for the Future (MEF): ProDock: A Comprehensive Automated Framework for Molecular...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MEF2/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65%64%61%69%75%6D%70@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Medicine-Artificial-Intelligence", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://ump.edu.vn/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
