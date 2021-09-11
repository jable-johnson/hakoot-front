import store from '@/store';

function hasPermission(permission: string): boolean {
  return store.getters.permissions.includes(permission);
}

export { hasPermission };
