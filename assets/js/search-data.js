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
            window.location.href = "/blog/";
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
        },{id: "nav-contact-us",
          title: "contact us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contacts/";
          },
        },{id: "post-proqsar-accepted-in-the-journal-of-cheminformatics",
        
          title: "ProQSAR accepted in the Journal of Cheminformatics",
        
        description: "Published on 22 April 2026, this work presents a modular QSAR workbench built to support reproducible, risk-aware, and deployment-ready molecular property modeling.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/proqsar/";
          
        },
      },{id: "members-tieu-long-phan",
          title: 'Tieu Long Phan',
          description: "TACsy MSCA Doctoral Network, Leipzig University / University of Southern Denmark, 2023–2026",
          section: "Members",handler: () => {
              window.location.href = "/members/D13_TieuLongPhan/";
            },},{id: "members-tuyet-minh-phan",
          title: 'Tuyet-Minh Phan',
          description: "TACsy MSCA Doctoral Network, Leipzig University / University of Vienna, 2025-2028",
          section: "Members",handler: () => {
              window.location.href = "/members/D17_TuyetMinhPhan/";
            },},{id: "members-gia-bao-truong",
          title: 'Gia-Bao Truong',
          description: "MSc candidate - EMJM Chemoinformatics+ 2025-2027",
          section: "Members",handler: () => {
              window.location.href = "/members/D18_GiaBaoTruong/";
            },},{id: "members-lai-hoang-son-le",
          title: 'Lai Hoang Son Le',
          description: "Texas A&amp;M University PhD candidate in Chemistry",
          section: "Members",handler: () => {
              window.location.href = "/members/D18_LaiHoangSonLe/";
            },},{id: "members-the-chuong-trinh",
          title: 'The-Chuong Trinh',
          description: "CEA PhD candidate in Bioinformatics",
          section: "Members",handler: () => {
              window.location.href = "/members/D18_TheChuongTrinh/";
            },},{id: "members-xuan-truc-tran-dinh",
          title: 'Xuan-Truc Tran-Dinh',
          description: "DCQ2018",
          section: "Members",handler: () => {
              window.location.href = "/members/D18_XuanTrucTranDinh/";
            },},{id: "members-khanh-vy-vo-nguyen",
          title: 'Khanh-Vy Vo-Nguyen',
          description: "DCQ2019",
          section: "Members",handler: () => {
              window.location.href = "/members/D19_KhanhVyVoNguyen/";
            },},{id: "members-thanh-an-pham",
          title: 'Thanh-An Pham',
          description: "MSc candidate - EMJM Chemoinformatics+ 2024-2026",
          section: "Members",handler: () => {
              window.location.href = "/members/D19_ThanhAnPham/";
            },},{id: "members-van-phuoc-chung-nguyen",
          title: 'Van Phuoc Chung Nguyen',
          description: "DCQ2019",
          section: "Members",handler: () => {
              window.location.href = "/members/D19_VanPhuocChungNguyen/";
            },},{id: "members-van-thinh-to",
          title: 'Van-Thinh To',
          description: "MSc candidate - EMJM Chemoinformatics+ 2025-2027",
          section: "Members",handler: () => {
              window.location.href = "/members/D19_VanThinhTo/";
            },},{id: "members-dong-nghi-nguyen-hoang",
          title: 'Dong-Nghi Nguyen-Hoang',
          description: "DCQ2020",
          section: "Members",handler: () => {
              window.location.href = "/members/D20_DongNghiNguyenHoang/";
            },},{id: "members-hoang-huy-nguyen",
          title: 'Hoang-Huy Nguyen',
          description: "DCQ2020",
          section: "Members",handler: () => {
              window.location.href = "/members/D20_HoangHuyNguyen/";
            },},{id: "members-ngoc-tam-tran-nguyen",
          title: 'Ngoc-Tam Tran-Nguyen',
          description: "DCQ2020",
          section: "Members",handler: () => {
              window.location.href = "/members/D20_NgocTamTranNguyen/";
            },},{id: "members-nhu-ngoc-nguyen-song",
          title: 'Nhu-Ngoc Nguyen-Song',
          description: "DCQ2020",
          section: "Members",handler: () => {
              window.location.href = "/members/D20_NhuNgocNguyenSong/";
            },},{id: "members-quang-huy-le-nguyen",
          title: 'Quang-Huy Le-Nguyen',
          description: "DCQ2020",
          section: "Members",handler: () => {
              window.location.href = "/members/D20_QuangHuyLeNguyen/";
            },},{id: "members-tuyen-ngoc-truong",
          title: 'Tuyen Ngoc Truong',
          description: "Associate Professor - Head of Department of Organic Chemistry",
          section: "Members",handler: () => {
              window.location.href = "/members/TuyenNgocTruong/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-medical-education-for-the-future-mef-1",
          title: 'Medical Education for the Future (MEF) 1',
          description: "Generative AI study: Multi-objective approach toward de novo design of dual EGFR and VEGFR inhibitors",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MEF1/";
            },},{id: "projects-medical-education-for-the-future-mef-2",
          title: 'Medical Education for the Future (MEF) 2',
          description: "ProDock: A Comprehensive Automated Framework for Molecular Docking and Validation for Small Molecules and Peptides",
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
