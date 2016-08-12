export function getClients(ownerId) {
    return Stamplay.Object('client').get({user: ownerId});
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

export function updateClient(clientId, data) {
    return Stamplay.Object('client').patch(clientId, data)
}