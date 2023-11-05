import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export function SingleTask({id, done, title, date, toggleTask, deleteTask}){

    const completedStyle = {
        textDecoration: done ? 'line-through' : 'none', cursor: 'pointer',
      };
    return(
        <>
       
        {['Light'].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Body >
                
                    <Card.Title style={completedStyle}>{title}</Card.Title>
                    <Card.Text>
                        <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                            <div style={{display:"flex",gap:"15px"}}>
                                <Form.Check aria-label="option 1"
                                    checked={done} 
                                    onChange={e => toggleTask(id,e.target.checked)}
                                />
                                <span>Done</span>
                            </div>
                            <span>{id}</span>
                            <span>{"November"}</span>
                            <span>{2023}</span>
                            <span>{date.getYear}</span>
                            <Button 
                                variant="danger"
                                style={{backgroundColor: "red", }}
                                onClick= { ()=> deleteTask(id) } 
                                >
                                Delete
                            </Button>
                        </div>
                    </Card.Text>
                
            </Card.Body>
            </Card>
            ))}
        </>
    )
}