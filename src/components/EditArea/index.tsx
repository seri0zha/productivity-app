import React, { RefObject, useRef, useState} from "react";
import EditorButton from "../EditorButton";
import styles from "./styles.module.css";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import useOutsideClick from "../../hooks/useOutsideCallback";

interface EditAreaProps {
  value: string,
  name: string,
  onChange: (e: React.ChangeEvent) => void, 
  onTextAreaKeyDown: (e: React.KeyboardEvent) => void,
}

const EditArea: React.FC<EditAreaProps> = (props) => {
  const [calendarIsDisplayed, setCalendarIsDisplayed] = useState(false);
  const calendarRef: RefObject<HTMLDivElement> = useRef(null);
  const toggleCalendar = () => {
    setCalendarIsDisplayed(prevstate => !prevstate);
  }

  const onDateSelect = () => {
    setCalendarIsDisplayed(false);
  }

  useOutsideClick(calendarRef, () => setCalendarIsDisplayed(false));

  return (
    <div className={styles.editAreaWrapper}>
      <textarea 
        className={styles.textArea}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        onKeyDown={props.onTextAreaKeyDown}
        placeholder="To do something..."
        spellCheck="false">
      </textarea>
      <div className={styles.editAreaExtra}>
        <EditorButton
          className={styles.setDateButton}
          onClick={toggleCalendar}
          type="button"
          text="Today"
          />
          {calendarIsDisplayed &&
          <div ref={calendarRef} className={styles.calendar}>
            <Calendar
              onChange={onDateSelect}/>
          </div>}
      </div>
    </div>  
  )
} 

export default EditArea;