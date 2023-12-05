import React from 'react';

const styles = {
  headline: 'text-xl font-bold mb-2',
  body: 'text-lg leading-7 mb-4 ',
};

export default function About() {
  return (
    <div className='w-4/5'>
      <h2 className={styles.headline}>About Us:</h2>

      <p className={styles.body}>
        Welcome to u/skillity, where passion meets expertise, and learning knows
        no bounds. Founded by Shawn Gordon Becker, a seasoned professional who
        has traversed various industries, our platform is rooted in the belief
        that true mastery and fulfillment come from the fusion of passion,
        mentorship, and outstanding teaching.
      </p>

      <h2 className={styles.headline}>Meet Shawn Gordon Becker:</h2>

      <p className={styles.body}>
        Shawn, the driving force behind u/skillity, has woven a career tapestry
        rich in diverse experiences. From the boardroom to the studio, the
        kitchen to the tech hub, Shawn has immersed himself in different
        professions. Yet, amidst the variety, a common thread
        emerged—mentorship. At every juncture, Shawn found himself guided by
        mentors who not only excelled in their craft but also possessed an
        unparalleled passion for teaching.
      </p>

      <h2 className={styles.headline}>
        A Journey Shaped by Passionate Mentors:
      </h2>

      <p className={styles.body}>
        The journey began with mentors who were not just proficient in their
        fields but ignited a fire for learning. These mentors instilled a sense
        of purpose and dedication that went beyond the daily tasks—a passion
        that transformed mundane jobs into meaningful pursuits.
      </p>

      <h2 className={styles.headline}>Crafting the Vision for u/skillity:</h2>

      <p className={styles.body}>
        The idea for u/skillity was born from the realization that the most
        impactful professionals were not only experts but exceptional teachers.
        The vision is to create a platform where individuals like you, driven by
        a desire to share their unique skills, can connect with passionate
        learners seeking more than just knowledge.
      </p>

      <h2 className={styles.headline}>Why u/skillity:</h2>

      <p className={styles.body}>
        At u/skillity, we celebrate the dual essence of mastery and mentorship.
        We believe that everyone possesses a valuable skill worth sharing, and
        the key to unlocking one&apos;s potential lies in connecting with those
        who are equally passionate about teaching.
      </p>

      <p className={styles.body}>
        Join us in this journey where each skill becomes a story, and each
        learner finds not just knowledge but a mentor who fuels their passion.
        Embrace the u/skillity community—a vibrant tapestry of skills, stories,
        and shared expertise. Let&apos;s learn, connect, and grow together.
      </p>

      <p className={styles.body}>
        Discover the passion within you. Share your skills. Connect with others.
        Embrace the u/skillity community.
      </p>
    </div>
  );
}
