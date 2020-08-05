
module.exports = {
  // TODO: Tambahkan konfigurasi untuk
  // DB sebagai host mongoDB instance yang melihat pada environment variable `HOST`,
  //    jika environment variables tidak tersedia, makan nilai DB menjadi `localhost`
  // DB:

  // APP_PORT sebagai PORT untuk menjalankan project express dengan environment variable `HOST`
  //          jika environment variable tidak tersedia, maka nilai APP_PORT menjadi 80
  // APP_PORT: 
      //ubah DB yang sudah di bold dengan host mongodb masing-masing
      DB: process.env.HOST ? process.env.HOST : 'localhost',
      //learnit-react?retryWrites=true&w=majority',
      APP_PORT: process.env.PORT? process.env.PORT:80,
};
