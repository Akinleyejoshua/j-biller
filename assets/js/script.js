$.ajax({
  url: "https://api.flutterwave.com/v3/charges?type=card",
  method: "post",
  headers: "Authorization: Bearer FLWSECK-f9907f31558f7bfc64e5eeb46e7a53b2-X",
  data: JSON.stringify({
    card_number: "4556052704172643",
    cvv: "899",
    expiry_month: "01",
    expiry_year: "21",
    currency: "NGN",
    amount: "100",
    fullname: "Yemi Desola",
    email: "akinleyejoshua1@gmail.com",
    tx_ref: "MC-3243e",
    redirect_url: "https://webhook.site/3ed41e38-2c79-4c79-b455-97398730866c",
    authorization: {
      mode: "pin",
      pin: "3310",
    },
  }),
  success: (response) => {
    $(".root").html(JSON.stringify(response));
  },
  error: (response) => {
    $(".root").html(JSON.stringify(response));
  },
});

// FlutterwaveCheckout({
//     public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
//     tx_ref: "RX1",
//     amount: 10,
//     currency: "USD",
//     country: "US",
//     payment_options: " ",
//     redirect_url: // specified redirect URL
//       "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
//     meta: {
//       consumer_id: 23,
//       consumer_mac: "92a3-912ba-1192a",
//     },
//     customer: {
//       email: "akinleyejoshua1@gmail.com",
//       phone_number: "08102909304",
//       name: "Flutterwave Developers",
//     },
//     callback: function (data) {
//         $(".root").html(JSON.stringify(data));
//     },
//     onclose: function() {
//       // close modal
//     },
//     customizations: {
//       title: "My store",
//       description: "Payment for items in cart",
//       logo: "https://assets.piedpiper.com/logo.png",
//     },
//   });
