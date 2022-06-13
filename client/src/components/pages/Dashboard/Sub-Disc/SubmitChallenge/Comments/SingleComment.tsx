import React from 'react'

type Props = {
    children?: React.ReactElement;
}

const SingleComment = ({ children }: Props) => {
    return (
        <>
            <li>
                <div className="comment-main-level">
                    {/* Avatar */}
                    <div className="comment-avatar"><img src="https://picsum.photos/200" alt="" /></div>
                    {/* Contenedor del Comentario */}
                    <div className="comment-box">
                        <div className="comment-head">
                            <h6 className="comment-name by-author"><a href="#">Agustin Ortiz</a></h6>
                            <span>20 minutos</span>
                            <i className="fa fa-reply" />
                            <i className="fa fa-heart" />
                        </div>
                        <div className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                        </div>
                    </div>
                </div>
                {/* Respuestas de los comentarios */}
                {children && <>
                    <ul className="comments-list reply-list">
                        <>{children}</>
                    </ul>
                </>}
            </li>
        </>
    )
}

export default SingleComment