/* eslint-disable no-param-reassign */
import AuthDbSource from '../../api/auth-api';
import UsersDbSource from '../../api/users-api';
import Loading from '../../utility/loading';

const Login = {
  async render() {
    return `
    <div class="login">
    <section class="login-section act">
        <!-- Left side: Image -->
        <div class="login-image">
          <img src="./images/login-image.jpeg" alt="Login Image">
        </div>

        <!-- Right side: Form Container -->
        <div class="form-container">

            <!-- Login Form -->
            <form id="loginForm" class="form act">
              <div class="img">
                <a href="/">
                  <img src="./images/LogoMamen.png" alt="Logo Mamen">
                </a>
              </div>
              <div class="form-body">
                <h2>Login</h2>
                <div>
                  <label for="email">Username</label>
                  <input type="text" id="email" name="email" required>
                </div>
                <div>
                  <label for="password">Password</label>
                  <div class="password-container">
                    <input type="password" id="password" name="password" required>
                    <button type="button" class="toggle-password" aria-label="Toggle password visibility">
                      <i class="fa-regular fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-buttons">
                <button type="submit">Login</button>
                <P>Belum punya akun? Daftar <span id="registerBtn">disini</span></P>
              </div>
            </form>

            <!-- Register Form -->
            <form id="registerForm" class="form">
            <div class="img">
                <a href="/">
                  <img src="./images/LogoMamen.png" alt="Logo Mamen">
                </a>
              </div>
              <div class="form-body">
                <h2>Daftar</h2>
                <div>
                  <label for="reg-email">Username</label>
                  <input type="text" id="reg-email" name="email" required>
                </div>
                <div>
                  <label for="reg-password">Password</label>
                  <div class="password-container">
                    <input type="password" id="reg-password" name="reg-password" required>
                    <button type="button" class="toggle-password" aria-label="Toggle password visibility">
                      <i class="fa-regular fa-eye"></i>
                    </button>
                  </div>
                </div>
                <div>
                  <label for="fullname">Fullname</label>
                  <input type="text" id="fullname" name="fullname" required>
                </div>
              </div>
              <div class="form-buttons">
                <button type="submit">Daftar</button>
                <P>Sudah punya akun? Login <span id="loginBtn">disini</span></P>
              </div>
            </form>
        </div>
    </section>
    </div>
    `;
  },

  async afterRender() {
    const loginPage = document.querySelector('.login');
    // hide header and footer while rendering the login page
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    header.style.display = 'none';
    footer.style.display = 'none';
    // --------------------------------------------

    // login and register button
    function showLogin() {
      document.getElementById('loginForm').classList.add('act');
      document.getElementById('registerForm').classList.remove('act');
      document.getElementById('loginBtn').classList.add('act');
      document.getElementById('registerBtn').classList.remove('act');
      document.querySelector('.login-section').classList.add('act');
    }

    function showRegister() {
      document.getElementById('registerForm').classList.add('act');
      document.getElementById('loginForm').classList.remove('act');
      document.getElementById('registerBtn').classList.add('act');
      document.getElementById('loginBtn').classList.remove('act');
      document.querySelector('.login-section').classList.remove('act');
    }

    document.getElementById('loginBtn').addEventListener('click', showLogin);
    document.getElementById('registerBtn').addEventListener('click', showRegister);
    // --------------------------------------------

    document.querySelectorAll('.toggle-password').forEach((toggleButton) => {
      toggleButton.addEventListener('click', (event) => {
        const passwordInput = event.target.closest('.password-container').querySelector('input');
        const isPasswordVisible = passwordInput.type === 'text';

        passwordInput.type = isPasswordVisible ? 'password' : 'text';

        // Ubah ikon tombol mata (opsional)
        toggleButton.innerHTML = '';
        toggleButton.innerHTML = isPasswordVisible ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-eye-slash"></i>';
      });
    });

    // login form
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const auth = { username, password };

      try {
        await AuthDbSource.postAuth(auth);

        if (localStorage.getItem('accessToken')) {
          await Loading.loadingPage(loginPage);
          window.location.href = '/';
        }
      } catch (error) {
        console.error(error);
      }
    });

    // register form
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('reg-email').value;
      const password = document.getElementById('reg-password').value;
      const fullname = document.getElementById('fullname').value;

      const user = { username, password, fullname };

      try {
        await UsersDbSource.postUser(user);
        showLogin();
      } catch (error) {
        console.error(error);
      }
    });
  },
};

export default Login;
