import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogPosts = [
    {
      id: 1,
      title:
        'Honoring a Legacy in Bronze and Fiberglass: The Sculpture of Dr. John Garang de Mabior',
      date: 'May 22, 2025',
      category: 'Creative Process',
      excerpt: 'A behind-the-scenes look...',
      image: 'garang1.jpg',
      content: `<article>
  <h1>Honoring a Legacy in Bronze and Fiberglass: The Sculpture of Dr. John Garang de Mabior</h1>

  <p>In a powerful tribute to one of South Sudan’s most iconic leaders, a sculpture of the late Dr. John Garang de Mabior Atem was created and installed in Maban County, Upper Nile State. This monumental piece was crafted by a dedicated team of visual artists: Angelo Govito, Stanislaus Vaida, Patrice Gundasiao Yanga, and Joseph Kangi, whose combined talents brought this vision to life.</p>

  <p>The journey of the sculpture began in 2011 in Khartoum, where the fabrication process was initiated. Over the course of one and a half months, the team undertook a meticulous, multi-phase process to bring the likeness of Dr. Garang into physical form.</p>

  <h2>The Process Behind the Sculpture</h2>
  <p>The execution of the sculpture followed a series of carefully planned phases:</p>

  <h3>1. Conceptualization and Armature Construction</h3>
  <p>The creative process started with conceptual sketches and design development, leading to the construction of an armature—a structural framework—crafted from molten metal to serve as the sculpture’s core.</p>

  <h3>2. Form Building and Detailing</h3>
  <p>With the foundation in place, the artists began building up the sculpture’s form, gradually refining the details to accurately capture the features and essence of Dr. Garang.</p>

  <h3>3. Finishing and Molding</h3>
  <p>Once the sculpture was fully shaped, it underwent a final surface refinement. A plaster mold was then created, capturing every detail of the form in preparation for the casting stage.</p>

  <h3>4. Fiberglass Casting and Assembly</h3>
  <p>The mold served as the template for casting the sculpture in fiberglass—a material chosen for its durability and versatility. The cast components were then assembled and polished to achieve the final, striking appearance.</p>

  <h2>A Lasting Tribute</h2>
  <p>Upon completion, the sculpture was transported to its permanent location in Maban County, where it now stands as a testament to Dr. Garang’s legacy and the role of art in preserving national memory. This project not only celebrates a national hero but also highlights the skill and dedication of South Sudanese artists working to immortalize their country’s history through creative expression.</p>
</article>
`,
    },
    {
      id: 2,
      title: 'Mastering Color Theory',
      date: 'April 2, 2024',
      category: 'Techniques',
      excerpt: 'Practical guide to color harmony...',
      image: 'photo6.jpg',
      content: `<article>
  <h1>Honoring a Legacy in Bronze and Fiberglass: The Sculpture of Dr. John Garang de Mabior</h1>

  <p>In a powerful tribute to one of South Sudan’s most iconic leaders, a sculpture of the late Dr. John Garang de Mabior Atem was created and installed in Maban County, Upper Nile State. This monumental piece was crafted by a dedicated team of visual artists: Angelo Govito, Stanislaus Vaida, Patrice Gundasiao Yanga, and Joseph Kangi, whose combined talents brought this vision to life.</p>

  <p>The journey of the sculpture began in 2011 in Khartoum, where the fabrication process was initiated. Over the course of one and a half months, the team undertook a meticulous, multi-phase process to bring the likeness of Dr. Garang into physical form.</p>

  <h2>The Process Behind the Sculpture</h2>
  <p>The execution of the sculpture followed a series of carefully planned phases:</p>

  <h3>1. Conceptualization and Armature Construction</h3>
  <p>The creative process started with conceptual sketches and design development, leading to the construction of an armature—a structural framework—crafted from molten metal to serve as the sculpture’s core.</p>

  <h3>2. Form Building and Detailing</h3>
  <p>With the foundation in place, the artists began building up the sculpture’s form, gradually refining the details to accurately capture the features and essence of Dr. Garang.</p>

  <h3>3. Finishing and Molding</h3>
  <p>Once the sculpture was fully shaped, it underwent a final surface refinement. A plaster mold was then created, capturing every detail of the form in preparation for the casting stage.</p>

  <h3>4. Fiberglass Casting and Assembly</h3>
  <p>The mold served as the template for casting the sculpture in fiberglass—a material chosen for its durability and versatility. The cast components were then assembled and polished to achieve the final, striking appearance.</p>

  <h2>A Lasting Tribute</h2>
  <p>Upon completion, the sculpture was transported to its permanent location in Maban County, where it now stands as a testament to Dr. Garang’s legacy and the role of art in preserving national memory. This project not only celebrates a national hero but also highlights the skill and dedication of South Sudanese artists working to immortalize their country’s history through creative expression.</p>
</article>
`,
    },
    // Add more...
  ];

  getAllposts() {
    return this.blogPosts;
  }

  getPostById(id: number) {
    return this.blogPosts.find((post) => post.id === id);
  }
}
