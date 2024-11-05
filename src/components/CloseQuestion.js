import React, { useState, memo } from "react";
import { useForm } from "react-hook-form";
import "../styles/CloseQuestion.css";

const CloseQuestion = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMessage("Ваш ответ отправлен! Спасибо за отзыв.");
  };

  return (
    <div className="close-question">
      <h1>Закрыть вопрос</h1>
      <p>
        <strong>Вы уверены, что хотите закрыть вопрос?</strong>
      </p>
      <p>
        Пожалуйста, оцените ответы ветеринарного врача по шкале от 1 до 10, где
        1 - совсем не понравилось, 10 - все супер!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rating">
          {[...Array(10)].map((_, i) => (
            <label key={i} className="rating-option">
              <input
                type="radio"
                value={i + 1}
                {...register("rating", { required: true })}
              />
              {i + 1}
            </label>
          ))}
        </div>
        {errors.rating && <p className="error">Пожалуйста, выберите оценку.</p>}
        <div className="feedback">
          <textarea placeholder="Мне" {...register("feedback")} />
        </div>
        <button type="submit" className="close-button">
          Закрыть вопрос
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
});

export default CloseQuestion;
