import React, {useState} from "react";
import EditorButton from "../EditorButton";
import styles from "./styles.module.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
interface EditAreaProps {
  value: string,
  name: string,
  onChange: any, // FIX THIS
  onTextAreaKeyDown: (e: React.KeyboardEvent) => void,
}

const EditArea: React.FC<EditAreaProps> = (props) => {
  const [calendarIsDisplayed, setCalendarIsDisplayed] = useState(false);

  const toggleCalendar = () => {
    setCalendarIsDisplayed(prevstate => !prevstate);
  }

  const onDateSelect = () => {
    setCalendarIsDisplayed(false);
  }

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
          <div className={styles.calendar}>
            <Calendar 
              onChange={onDateSelect}/>
          </div>}
      </div>
    </div>  
  )
} 

export default EditArea;