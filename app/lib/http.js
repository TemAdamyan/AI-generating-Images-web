import axios from 'axios';

const engineId = 'stable-diffusion-v1-6'
const apiHost = 'https://api.stability.ai'; // This should be securely managed if it varies
const apiKey = 'sk-UfHDzmQVj4khARuCkMNnJewHRGenbclb1wIhdEZcTN1MX4sE'; // Ensure this is securely managed

const url = `${apiHost}/v1/generation/${engineId}/text-to-image`;

const id = 'stable-diffusion-xl-1024-v1-0'
const imageToImageurl = `${apiHost}/v1/generation/${id}/image-to-image`;
// "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image",

if (!apiKey) {
  throw new Error('Missing Stability API key.');
}


export const TextToImageGeneration = async (text, genStyle)=> {
    return await axios.post(url, {
        text_prompts: [
          {
            text: text,
          },
        ],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        steps: 30,
        samples: 3,
        style_preset: genStyle,
      }, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
    })
}


export const LoginRequest = (login, password) => {

    return axios.post('/api/login', {
      login: login,
      password: password
    })
}


export const ImageToImageGeneration = async (text, file)=> {

  const formData = new FormData()
  formData.append('init_image', file)
  formData.append('init_image_mode', 'IMAGE_STRENGTH')
  formData.append('image_strength', 0.35)
  formData.append('text_prompts[0][text]', text)
  formData.append('cfg_scale', 7)
  formData.append('samples', 1)
  formData.append('steps', 30)

  return await axios.post(imageToImageurl, formData, {
      headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
      },
  })
}