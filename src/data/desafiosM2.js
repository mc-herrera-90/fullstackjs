import Desafio1 from '../pages/desafios/m2/curriculumVitae.mdx';

export const desafiosM2 = [
    {title: 'Curriculum Vitae', difficult: 'Fácil', slug: 'curriculum-vitae', component: Desafio1},
]

// data/projects

const projects = {
    cv : [
  {
    "type": "folder",
    "name": "mi-cv-html",
    "open": true,
    "children": [
      {
        "type": "folder",
        "name": "assets",
        "open": true,
        "children": [
          {
            "type": "folder",
            "name": "css",
            "open": true,
            "children": [
              {
                "type": "file",
                "name": "print.css",
                "icon": "css3-alt"
              }
            ]
          },
          {
            "type": "folder",
            "name": "img",
            "open": true,
            "children": [
              {
                "type": "file",
                "name": "profile.png",
                "download_path": "https://i.ibb.co/SXnSFrkB/profile.png",
                "icon": "image"
              }
            ]
          },
        ]
      },
            {
        "type": "file",
        "name": "index.html",
        "icon": "html5"
      },
    ]
  }
]

}


export default projects;
