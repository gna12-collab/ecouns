import { Card, Row, Col, Icon } from "react-materialize";
import PropTypes from "prop-types";
import AdminContext from "../../../../context/admin/adminContext";
import AlertContext from "../../../../context/alert/alertContext";
import { useContext } from "react";

const StudFeedCard = ({ feed }) => {
  const adminContext = useContext(AdminContext);
  const alertContext = useContext(AlertContext);
  const { deleteStudFeed } = adminContext;
  const { setAlert } = alertContext;

  const deleteFeed = () => {
    deleteStudFeed({
      feed_id: feed.feed_id,
    });
    setAlert("Deleted Successfully", "success");
  };

  return (
    <Row style={{ margin: "0" }}>
      <Col m={6} s={12} style={{ width: "300px" }}>
        <Card
          actions={[
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
              key='1'
            >
              <a
                href='#!'
                className='waves-effect waves-light btn'
                style={{
                  borderRadius: "10px",
                  minWidth: "50px",
                  width: "75px",
                  backgroundColor: "#BA3F1D",
                  margin: "0",
                  marginRight: "15px",
                }}
                onClick={deleteFeed}
              >
                <Icon>delete</Icon>
              </a>
            </div>,
          ]}
          className='z-depth-1 grow'
          closeIcon={<Icon>close</Icon>}
          revealIcon={<Icon>more_vert</Icon>}
          textClassName='white-text'
          title={feed.stud_name}
        >
          <strong>{feed.feed_desc}</strong>
        </Card>
      </Col>
    </Row>
  );
};

// Set proptypes
StudFeedCard.propTypes = {
  feed: PropTypes.object.isRequired,
};

export default StudFeedCard;
