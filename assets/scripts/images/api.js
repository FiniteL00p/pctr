const store = require('../store')
const apiUrl = require('../config')

const uploadImage = function (data) {
  return $.ajax({
    url: apiUrl + '/images',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data,
    processData: false,
    contentType: false
  })
}

const getImages = () => {
  return $.ajax({
    url: apiUrl + '/images',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getImagesByDistance = () => {
  return $.ajax({
    url: apiUrl + '/images' + '?latitude=' + store.user.latitude + '&longitude=' + store.user.longitude,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteImage = () => {
  return $.ajax({
    url: apiUrl + '/images/' + store.currentImageID,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const findImageById = (id) => {
  return $.ajax({
    url: apiUrl + '/images/' + id,
    method: 'GET',
  })
}

const editImage = (editImgData) => {
  return $.ajax({
    url: apiUrl + '/images/' + store.currentImageID,
    method: 'PATCH',
    headers: authHeader,
    data: editImgData
  })
}

module.exports = {
  uploadImage,
  editImage,
  findImageById,
  deleteImage,
  getImages,
  getImagesByDistance
}
