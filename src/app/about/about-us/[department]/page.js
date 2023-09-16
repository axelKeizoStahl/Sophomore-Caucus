import styles from './styles.css';
import Bobby from '../../../images/Bobby.jpg';
import Image from 'next/image';

export default function Page({ params }) {
    const department_info = {
        events: {
            leader: ["Bobby Rublev", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "John Doe, Jane Smith, Michael Johnson, Emily Davis, Robert Brown, Sarah Wilson",
        },
        finance: {
            leader: ["Bobby Rublev", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "John Doe, Jane Smith, Michael Johnson, Emily Davis, Robert Brown, Sarah Wilson",
        },
        graphics: {
            leader: ["Bobby Rublev", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "John Doe, Jane Smith, Michael Johnson, Emily Davis, Robert Brown, Sarah Wilson",
        },
        it: {
            leader: ["Bobby Rublev", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "John Doe, Jane Smith, Michael Johnson, Emily Davis, Robert Brown, Sarah Wilson",
        },
        internals: {
            leader: ["Bobby Rublev", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "John Doe, Jane Smith, Michael Johnson, Emily Davis, Robert Brown, Sarah Wilson",
        },
        oppurtunities: {
            leader: ["Bobby Rublev", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "John Doe, Jane Smith, Michael Johnson, Emily Davis, Robert Brown, Sarah Wilson",
        },
        outreach: {
            leader: ["Bobby Rublev", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec."],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.",
            members: "John Doe, Jane Smith, Michael Johnson, Emily Davis, Robert Brown, Sarah Wilson",
        },
    }
    console.log(params.department)
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
