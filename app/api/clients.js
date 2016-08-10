export function getClients() {
    return Stamplay.Object('client').get({});
}

export function getClient(id) {
    return Stamplay.Object('client').get({ _id: id });
}

export function removeClient(id) {
    return Stamplay.Object('client').remove(id);
}

export function addClient(client) {
    return Stamplay.Object('client').save(client);
}