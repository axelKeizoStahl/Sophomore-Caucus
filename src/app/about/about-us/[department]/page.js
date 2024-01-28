import styles from './DptInfo.module.css';
import Image from 'next/image';
import BouncingDivs from '@/app/components/BouncingDivs';

export default function Page({ params }) {
    const department_info = {
        events: {
            image: '/images/events.jpeg',
            leader: ["Eisei Kori", "Hi, my name is Eisei Kori, and I'm the Sophomore Caucus events director. Our department focuses on making engaging events for the sophomore community and providing more bonding experiences.  I like dancing and also eating. This year I have the pleasure to be working with all my wonderful members."],
            description: "Welcome to the events department of the sophomore caucus. Here we plan fun fundraisers and opportunities for the students of all years to interact with each other and make sure these can be pulled off consistently.",
            members: "Veronika Gulko, Asna Rahman, Evelina Vyshyvaniuk,  Jimmy Gao, Catherine Chen, Lauren Yang, Theresa Lau, Haowen Xiao",
        },
        finance: {
            image: '/images/finance1.jpg',
            leader: ["Amy Wang", "Hi! I’m one of the co directors of the finance department. Aside from school, I love to play volleyball and occasionally go on runs. I love listening to music and shopping. I’m associated with the Spectator Business department and SU budget department."],
            description: "Hi! We are the finance department. We are responsible for making budget plans for events. We strive to make events as cost friendly as possible for the Co-presidents.",
            members: "Mira Gupta",
        },
        graphics: {
            image: '/images/graphics.jpg',
            leader: ["Siddharth Shrivastava", "Hey! I'm the graphics director for the Sophomore Caucus. Outside of the Caucus, I also like to paint and draw in my free time, and I am involved with the Spectator Newspaper Sports department. In graphics, our responsibilities involve creating visually appealing content for various purposes, such as event promotions, club materials, and news for the school. I aim to improve our school's design and student engagement through creative and concise posters to make our student community even closer."],
            description: "The Graphics department makes all the monthly posts for our Sophomore Caucus instagram and creates the exciting pictures for our events. The department gives a glimpse of what each event will revolve around with a decorated theme around the needed information.",
            members: "Rebekah Abraham, Stephanie Wijaya",
        },
        it: {
            image: '/images/it.jpg',
            leader: ["Axel Stahl", "My name is Axel Stahl, director of IT in the Sophomore Caucus. I enjoy programming and exploring computers and linux things. I dislike web programming, but usually end up doing it anyway. I am also an avid reader; my favorite author is Kenzaburo Oe. In the little free time I have, I play piano and listen to music."],
            description: "Hello, we are the IT department. We hold the responsibility of creating and maintaining this website. The the combined efforts of the director and members, we hope to improve this website for the best user experience.",
            members: "Esther Lee, Alvern Chen, Rahul Deb, Maximiliano Pettica, Daniella-Malouse Nkunga",
        },
        internals: {
            image: '/images/internals.jpg',
            leader: ["Amy Zhou", "Hi, my name is Amy and I’m the Internals Director of Sophomore Caucus, so I work with my members and the Graphics Department to produce student resources. In my free time, I enjoy listening to music, hanging out with my friends and volunteering. I’m very excited to work with rest of the Sophomore Caucus this year!"],
            description: "The Internals Department works on creating student resources, including study guides, course selection guides and teacher guides. Every month, the department works with the Graphics Department to create magazines posted at the start of each month, providing information such as important dates, opportunities and club shoutouts.",
            members: "Joy Lu, Wade Guo Rachel Wang",
        },
        outreach: {
            image: '/images/outreach.jpg',
            leader: ["Zihe Huang", "Hey, I’m the outreach director for Sophomore Caucus. Outside of Caucus, I’m also involved in Model UN, the Metis Project and the Volleyball Team. In outreach, our responsibilities are to coordinate with clubs in Stuy, reach out to external organizations, and advertise events. We hope to create a well connected student body and make events more enjoyable."],
            description: "The outreach department is in charge of promoting Caucus events and staying in touch with the student body. This includes using social media, posters, reaching out to other organizations for collaborations among other methods of communication. Additionally, we create monthly features to support Sophomore ran clubs -- if you're interested make sure to fill out the form on our insta!!",
            members: "Leah Riegel, Theresa Lau",
        },
    }

    const department = department_info[params.department]
    const department_name = params.department[0].toUpperCase() + params.department.slice(1)
    return (
        <div className={styles.dptPage}>
            <BouncingDivs className={styles.balls} />
            <h1>{"Department of " + department_name}</h1>
            <div>
                <div className={styles.dptLeader}>
                    <div className={`${styles.textContainer} ${styles.dptLeaderContainer}`}>
                        <Image
                            src={department.image}
                            width={400}
                            height={500}
                            alt={department.leader[0]}
                        />
                        <h2>{department.leader[0]}</h2>
                    </div>
                    <div>
                        <div className={`${styles.dptLeaderDescription} ${styles.textContainer}`}>{department.leader[1]}</div>
                    </div>
                </div>
                <div className={styles.dptContainer2}>
                    <div className={`${styles.textContainer} ${styles.dptOther}`}>
                        <h2>Description</h2>
                        <h4>{department.description}</h4>
                    </div>
                    <div className={`${styles.textContainer} ${styles.dptMembers} ${styles.dptOther}`}>
                        <h2>Members</h2>
                        <h4 className={styles.dptMembersName}>{department.members}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
