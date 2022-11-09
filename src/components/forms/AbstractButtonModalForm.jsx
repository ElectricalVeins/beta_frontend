import { useState } from "react";
import { Button } from "antd";
import { ModalForm } from "./ModalForm";

export const AbstractButtonModalForm = (props) => {
    const {text, formComponent, onSuccess} = props;

    const modalControls = useState(false);
    const [, setOpen] = modalControls;
    const openModal = () => setOpen(true);

    return (
        <>
            <Button onClick={openModal}>{text}</Button>
            <ModalForm
                controls={modalControls}
                formComponent={formComponent}
                onSuccess={onSuccess}
            />
        </>
    );
};
