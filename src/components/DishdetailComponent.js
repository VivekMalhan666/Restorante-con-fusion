import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

//main render function
function RenderDish({dish}){
    if (dish) {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading="true">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}
    //to render all comments
    function RenderComments({comments}) {
        if (comments) {
            var AllComments = comments.map((comment) => {
                var month = new Array();
                month[0] = "Jan";
                month[1] = "Feb";
                month[2] = "Mar";
                month[3] = "Apr";
                month[4] = "May";
                month[5] = "June";
                month[6] = "July";
                month[7] = "Aug";
                month[8] = "Sept";
                month[9] = "Oct";
                month[10] = "Nov";
                month[11] = "Dec";
                var date = comment.date.split('-');
                return (
                    <div>
                        <li key={comment.id} className="my-3" >
                            {comment.comment}
                            <br />
                        </li>
                        <li className="my-3">
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </li>
                    </div>

                )
            });
            return (
                <div className="col-12 col-md-5">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {AllComments}
                    </ul>
                </div>
            );
        } else {
            return <div></div>
        }
    }
    function DishDetail(props){
        if (props.selected) {
            return (
                <div className="row">
                    <RenderDish dish={props.selected} />
                    <RenderComments comments={props.selected.comments} />
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

export default DishDetail;