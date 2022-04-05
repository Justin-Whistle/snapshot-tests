import Card from 'react-bootstrap/Card'



const GitHubCard = () => {
    return (
        <div>
            <Card>
                <Card.Text style={{ fontSize: "2.5em" }}>
                    Justin-Whistle
                </Card.Text>
                <Card.Img src="JustinSpoonBill.jpg" alt="big fish" />
                <Card.Text style={{ fontSize: "1em" }}>
                    I have a passion for the outdoors and technology. Would love to be in a position to combine the two someday. 
                </Card.Text>
            </Card>
        </div>
    )
}

export default GitHubCard