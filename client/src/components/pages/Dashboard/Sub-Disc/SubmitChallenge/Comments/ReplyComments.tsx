import React from "react";

type Props = {};

const ReplyComments = (props: Props) => {
  return (
    <>
      <li>
        {/* Avatar */}
        {/* <div className="comment-avatar"><img src="https://picsum.photos/200" alt="" /></div> */}
        {/* Contenedor del Comentario */}
        <div className="comment-box">
          <div className="comment-head">
            <h6 className="comment-name ">
              <a href="https://picsum.photos/200">Agustin Ortiz</a>
            </h6>
            <span>10 minutos</span>
            <i className="fa fa-reply" />
            <i className="fa fa-heart" />
          </div>
          <div className="comment-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            omnis animi et iure laudantium vitae, praesentium optio, sapiente
            distinctio illo?
          </div>
        </div>
      </li>
    </>
  );
};

export default ReplyComments;
