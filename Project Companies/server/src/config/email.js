const clientUrl = require("../config/environment").clientUrl;

module.exports.mainNewReviewForCompany = (name, reviewText) => {
  const subject = "New review for you";
  const content = contentHtml(subject, name, `You have new review`, reviewText);
  return { content, subject };
};

module.exports.mailVerifiedEmail = ({ name }, token) => {
  const subject = "Verify Your E-mail Account";
  const content = contentHtml(
    subject,
    name,
    `Only one step left to register your Optunli account successfully,
    Please click following link to activate your Optunli account:`,
    `${clientUrl}/activation?token=${token}`,
    "Please be noted that the above link will expire in 8 hours"
  );
  return { content, subject };
};

module.exports.mailSendVerifyCode = ({ name }, verificationCode) => {
  const subject = "Verify Your E-mail Account";
  const content = contentHtml(
    subject,
    name,
    `Only one step left to register your Optunli account successfully,
    Please click following link to activate your Optunli account:`,
    null,
    `Your verification code: ${verificationCode}`
  );
  return { content, subject };
};

module.exports.mailVerifiedNewEmail = ({ name }, token) => {
  const subject = "Verify Your new Email ";
  const content = contentHtml(
    subject,
    name,
    `You changed mail. To confirm this email, click the link`,
    `${clientUrl}/verify?token=${token}`,
    "Please be noted that the above link will expire in 8 hours"
  );
  return { content, subject };
};

const contentHtml = (title, name, text, href, afterText) => {
  return `<div style="background: #dfe3df; align-items: center; font-family: 'Roboto', sans-serif;">
      <h4 style="border-bottom: 1px solid; padding-bottom: 10px;">${title}</h4>
      <p><i>Dear ${name || "User"},</i> ${text} </p> 
      ${href && `<a href=${href} style="width: 250px">${href}</a>`}
      ${afterText || ""}
      <div style="align-items:left; margin-top: 20px;">
        <i>(Link not working? Copy and paste the link into your browser)</i>
        <p> Mega Clean.</p>
      </div>
    </div>
    `;
};

module.exports.mailForChangeStatus = (orderId, status, message = null) => {
  const subject = `Ваш заказ ${status}`;
  const cause = message ? `Причина отмены заказа: ${message}` : "";
  const content = contentHtml(
    subject,
    null,
    `${cause}\nПерейдите по ссылке, чтобы посмотреть`,
    ` ${clientUrl}/profile/orders/?status=${status}`
  );
  return { content, subject };
};

module.exports.mailForUnblocked = (name, message = null) => {
  const subject = `Ваш профиль разблокирован`;

  const content = contentHtml(
    subject,
    name,
    `Ваш профиль разблокировали\n Перейдите по ссылке, чтобы посмотреть`,
    `${clientUrl}/profile`
  );

  return { content, subject };
};

module.exports.mailForBlocked = (name, message) => {
  const subject = `Ваш профиль заблокировали`;
  const content = contentHtml(
    subject,
    name,
    ` Ваш профиль заблокировали по следующей причине: ${message}`,
    `${clientUrl}/profile`
  );
  return { content, subject };
};

module.exports.mailForCreateOrder = (name, orderId) => {
  const subject = `Новый заказ`;
  const content = contentHtml(
    subject,
    name,
    `У вас новый заказ. Перейтиде по ссылке что бы посмотреть`,
    `${clientUrl}/profile/orders?status=pending`
  );
  return { content, subject };
};
