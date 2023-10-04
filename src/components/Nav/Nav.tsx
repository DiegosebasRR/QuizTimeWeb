import React, { useState } from "react";
import Button from "../global/Button/Button";
import styles from "./Nav.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface QuestionaireData {
  titles: string;
  description: string;
  userId: string;
  image: File;
}
const Nav = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para controlar la ventana emergente
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [titles, setTitles] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();
  const id = user?._id;
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const archivo = e.target.files?.[0];
    if (archivo) {
      setImage(archivo);
    }

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
      setSelectedImage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const QuestionaireData: QuestionaireData = {
        titles,
        description,
        userId: id!,
        image: image!,
      };
      console.log(QuestionaireData);

      const response = await axios.post(
        "http://localhost:3002/questionnaire/",
        QuestionaireData
      );
      console.log(response);
      handlePopupClose();
      navigate("/create");
      // Aquí puedes manejar la respuesta de la API, como guardar el token de autenticación en el estado global o redirigir al usuario a otra página.
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className={styles.nav}>
      <h1>QuizTime</h1>
      <input className={styles.search} type="text" placeholder="Buscar" />

      <Button
        text="Create Quiz"
        background={true}
        width={260}
        height={65}
        onClick={handlePopupOpen} // Abrir la ventana emergente al hacer clic
      />

      <div className={styles.profile}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="Foto de perfil"
        />
        <p>
          {user?.firstname} {user?.lastname}
        </p>
      </div>

      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h1 style={{ textAlign: "center", margin: "0px" }}>Create Quiz</h1>
            <form>
              <div>
                <label className={styles.labelForm} htmlFor="title">
                  Title
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="title"
                  name="title"
                  onChange={(e) => setTitles(e.target.value)}
                  placeholder="Ingresar Titulo"
                />
              </div>
              <div>
                <label className={styles.labelForm} htmlFor="description">
                  Description
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Ingresar Descripcion"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label className={styles.labelForm} htmlFor="image">
                  Image
                </label>
                <div className={styles.imageContainer}>
                  <input
                    className={styles.imageInput}
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e)}
                  />
                  {selectedImage ? (
                    <img src={selectedImage} alt="Selected" />
                  ) : (
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" // Ruta de la imagen por defecto en tono gris
                      alt="Default"
                    />
                  )}
                  <label className={styles.imageInputLabel} htmlFor="image">
                    Select Image
                  </label>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <Button
                  text="Cancel"
                  background={true}
                  onClick={handlePopupClose}
                />
                <Button text="Save" background={true} onClick={handleSubmit} />
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
