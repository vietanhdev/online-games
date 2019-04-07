export default function() {
  return [
    {
      title: "Home",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    },
    {
      title: "Login",
      htmlBefore: '<i class="material-icons">verified_user</i>',
      to: "/login",
    }
  ];
}
