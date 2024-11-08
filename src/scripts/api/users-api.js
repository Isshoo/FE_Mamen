import Swal from 'sweetalert2';
import { USERS } from '../globals/api-endpoint';

class UsersDbSource {
  static async postUser(user) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
          fullname: user.fullname,
        }),
      };
      const response = await fetch(USERS.ADD, options);
      const responseJson = await response.json();

      Swal.fire({
        title: `${responseJson.message}`,
        icon: 'success',
        text: 'Berhasil menambahkan user!',
      });

      return responseJson.data;
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal menambahkan user!',
      });
      return console.log('Gagal menambahkan user!');
    }
  }

  static async getUserById(id) {
    try {
      const response = await fetch(USERS.GET(id));
      const responseJson = await response.json();
      return responseJson.data;
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal mendapatkan user!',
      });
      return console.log('Gagal mendapatkan user!');
    }
  }
}

export default UsersDbSource;