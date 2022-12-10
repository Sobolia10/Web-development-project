import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {PRICING_DATA} from "./constants";
import ButtonComponent from "../../Components/ButtonComponent";
import TitleComponent from "../../Components/TitleComponent";
import './style.css';

const PricingPlanTemplate = () => {
    return (
        <div className={'pricing-section'}>
            <div className={'title-desc'}>
                <TitleComponent title={'Pricing Plan'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \n' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}/>
            </div>
            <div className={'priceCard-box'}>
                {PRICING_DATA.map(el => (
                    <Card style={{width: '18rem'}} key={el.id}>
                        <Card.Body className={'priceCard-title'}>
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Text>
                                <span style={{width: '1em'}}>$</span>{el.price}per month
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>30 Free Trail</ListGroup.Item>
                            <ListGroup.Item>5 Free Projects</ListGroup.Item>
                            <ListGroup.Item>PHP 5 Enabled</ListGroup.Item>
                            <ListGroup.Item>24/7 Suports</ListGroup.Item>
                            <ButtonComponent title={'order now'} onClick={()=>(console.log())}/>
                        </ListGroup>
                        {/*<Card.Body>*/}

                        {/*</Card.Body>*/}
                    </Card>
                ))
                }


            </div>
        </div>
    )
}

export default PricingPlanTemplate;