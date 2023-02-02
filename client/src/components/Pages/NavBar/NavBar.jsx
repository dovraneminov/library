import React from 'react';
import Attention from '../../UI/Attention/Attention';
import Navigation from '../../UI/Navigation/Navigation';
import Head from '../../UI/Head/Head';

function NavBar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.user);
  return (
    <div>
      <Attention />
      <Head />
      <Navigation />
      {/* {user?.id
        ? (
          <Link
            to="/logout"
            onClick={(e) => {
              dispatch(logoutUser(e));
              navigate('/');
            }}
          >
            Выйти
          </Link>
        )
        : (
          <>
            <Link to="/signup">Регистрация</Link>
            <Link to="/login">Авторизация</Link>
          </>
        )} */}

    </div>
  );
}

export default NavBar;
