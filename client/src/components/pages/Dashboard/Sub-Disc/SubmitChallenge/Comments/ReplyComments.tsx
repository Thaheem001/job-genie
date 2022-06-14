import React, { useState } from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import CommentInput from './CommentInput';

type Props = {}

const ReplyComments = (props: Props) => {
    const [isVisibleComment, setIsVisibleComment] = useState<boolean>(false);
    return (
        <>
            <li>
                {/* Avatar */}
                {/* <div className="comment-avatar"><img src="https://picsum.photos/200" alt="" /></div> */}
                {/* Contenedor del Comentario */}
                <div className="comment-box">
                    <div className="comment-head">
                        <h6 className="comment-name "><a href="https://picsum.photos/200">Agustin Ortiz</a></h6>
                        <span>10 minutos</span>
                        <i className="fa fa-reply" />
                        <i className="fa fa-heart" />

                        <button className="replyButton" title='Reply to this Comment'
                            onClick={() => isVisibleComment ? setIsVisibleComment(false) : setIsVisibleComment(true)}
                        ><ReplyIcon /></button>
                    </div>
                    <div className="comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                    </div>
                </div>
            </li>
            {isVisibleComment &&
                <div className="inner-comment inner-comment-child">
                    <CommentInput />
                </div>
            }
        </>
    )
}

export default ReplyComments