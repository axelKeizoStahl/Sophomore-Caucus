import styles from './styles.css';
import Bobby from '../../../images/Bobby.jpg';
import Image from 'next/image';

export default function Page({ params }) {
    const department_info = {
        events: {
            leader: ["Eisei Kori", "Hi, my name is Eisei Kori, and I'm the Sophomore Caucus events director. Our department focuses on making engaging events for the sophomore community and providing more bonding experiences.  I like dancing and also eating. This year I have the pleasure to be working with all my wonderful members."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "Veronika Gulko, Asna Rahman, Evelina Vyshyvaniuk,  Jimmy Gao, Catherine Chen, Lauren Yang, Theresa Lau, Haowen Xiao",
        },
        finance: {
            leader: ["Amy Wang", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "John Doe, Jane Smith, Michael Johnson, Emily Davis, Robert Brown, Sarah Wilson",
        },
        graphics: {
            leader: ["Siddharth Shrivastava", "Hey! I'm the graphics director for the Sophomore Caucus. Outside of the Caucus, I also like to paint and draw in my free time, and I am involved with the Spectator Newspaper Sports department. In graphics, our responsibilities involve creating visually appealing content for various purposes, such as event promotions, club materials, and news for the school. I aim to improve our school's design and student engagement through creative and concise posters to make our student community even closer."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "John Doe, Jane Smith, Michael Johnson, Emily Davis, Robert Brown, Sarah Wilson",
        },
        it: {
            leader: ["Axel Stahl", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "Esther Lee, Alvern Chen, Rahul Deb, Maximiliano Pettica, Daniella-Malouse Nkunga",
        },
        internals: {
            leader: ["Amy Zhou", "Hi, my name is Amy and I’m the Internals Director of Sophomore Caucus, so I work with my members and the Graphics Department to produce student resources. In my free time, I enjoy listening to music, hanging out with my friends and volunteering. I’m very excited to work with rest of the Sophomore Caucus this year!"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "Joy Lu, Wade Guo Rachel Wang",
        },
        magazines: {
            leader: ["Bobby Rublev", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "John Doe, Jane Smith, Michael Johnson, Emily Davis, Robert Brown, Sarah Wilson",
        },
        outreach: {
            leader: ["Zihe Huang", "Hey, I’m the outreach director for Sophomore Caucus. Outside of Caucus, I’m also involved in Model UN, the Metis Project and the Volleyball Team. In outreach, our responsibilities are to coordinate with clubs in Stuy, reach out to external organizations, and advertise events. We hope to create a well connected student body and make events more enjoyable."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "Leah Riegel, Theresa Lau",
        },
    }

    const department = department_info[params.department]
    const department_name = params.department[0].toUpperCase() + params.department.slice(1)
    return (
        <div className='dpt-page'>
            <h1 className='dpt-title'>{"Department of " + department_name}</h1>
            <div className='dpt-info'>
                <div className='dpt-leader'>
                    <div className='dpt-leader-container'>
                        <Image
                            src={Bobby}
                            width={400}
                            height={500}
                            alt={department.leader[0]}
                        />
                        <h2 className='dpt-leader-title'>{department.leader[0]}</h2>
                    </div>
                    <div className='dpt-leader-info'>
                        <div className='dpt-leader-description'>{department.leader[1]}</div>
                    </div>
                </div>
                <div className='dpt-container2'>
                    <div className='dpt-description dpt-other'>
                        <h2 className='dpt-description-title'>Description</h2>
                        <h4 className='dpt-description-info'>{department.description}</h4>
                    </div>
                    <div className='dpt-members dpt-other'>
                        <h2 className='dpt-members-title'>Members</h2>
                        <h4 className='dpt-members-name'>{department.members}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
