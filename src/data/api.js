// Lightweight service layer for form submissions.
// Swap the implementation of `submitAdmissionEnquiry` for a real API call
// once a backend endpoint is available — nothing in the UI needs to change.
//
// Example future implementation:
//   const res = await fetch(import.meta.env.VITE_ENQUIRY_API_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });
//   if (!res.ok) throw new Error('Request failed');
//   return res.json();
import emailjs from '@emailjs/browser';
export async function submitAdmissionEnquiry(payload) {
  if (!payload.email && !payload.phone) {
    throw new Error('At least one contact method is required.');
  }
  console.log('Admission payload:', payload);

  const response = await emailjs.send(
    'service_v6j8bi9',
    'template_lgx97zs',
    {
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      qualification: payload.qualification,
      mode:payload.mode,
      course: payload.course,
      message: payload.message,
    },
    {
      publicKey: 'Su17vYOSCD6w3yplL',
    }
  );

  if (response.status !== 200) {
    throw new Error('Failed to submit enquiry.');
  }

  return {
    ok: true,
  };
}
