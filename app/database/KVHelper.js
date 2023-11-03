import * as React from 'react';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  return await SecureStore.getItemAsync(key);
}

export async function getToken() {
  return getValueFor('token')
}

export function setToken(value) {
  save('token', value)
}


