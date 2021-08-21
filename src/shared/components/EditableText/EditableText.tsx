import React, { useState } from 'react';
import Button from '../../form/form-utils/Button/Button';
import classes from "./EditableText.module.css";

import editsvg from "../../../assets/svg/edit.svg";
import donesvg from "../../../assets/svg/done.svg";

type EditableTextProps = {
    type: 'p' | 'h3',
    active: boolean,
};

const EditableText: React.FC<EditableTextProps> = (props) => {

    const [editing, setEditing] = useState(false);

    const chosenType = props.type === 'p' ? <>
        {!editing ? <p>
            {props.children}
            {props.active && <Button className={classes.button} onClick={() => setEditing(true)}><img src={editsvg} /></Button>}
        </p >
            :
            <>
                <textarea name="" id="" rows={10} className={classes.p}>
                    {props.children}
                </textarea>
                <Button className={classes.button} onClick={() => setEditing(false)}><img src={donesvg} /></Button>
            </>

        }
    </> : <>
        {!editing ? <h3>
            {props.children}
            {props.active && <Button className={classes.button} onClick={() => setEditing(true)}><img src={editsvg} /></Button>}
        </h3 >
            :
            <>
                <textarea name="" id="" rows={3} className={classes.h3}>
                    {props.children}
                </textarea>
                <Button className={classes.button} onClick={() => setEditing(false)}><img src={donesvg} /></Button>
            </>
        }
    </>


    return <div className={classes.base}>
        {chosenType}
    </div>;


}
export default EditableText;