const jwt = require('jsonwebtoken');
const authenticateToken = require('../../src/modules/users/middleware/auth');

jest.mock('jsonwebtoken');

describe('AuthenticateToken Middleware', () => {
  it('Debe retornar 401 si no se proporciona un token', () => {
    const req = { headers: {} };
    const res = {
      status: jest.fn(() => res),
      send: jest.fn()
    };
    const next = jest.fn();

    authenticateToken(req, res, next);
    
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith('Acceso denegado. No se proporcionó token.');
  });

  it('Debe llamar a next si el token es válido', () => {
    const req = { headers: { authorization: 'Bearer validtoken' } };
    const res = {};
    const next = jest.fn();
    const mockUser = { id: 1, username: 'user' };

    jwt.verify.mockImplementation((token, secret, callback) => callback(null, mockUser));
    
    authenticateToken(req, res, next);

    expect(jwt.verify).toHaveBeenCalledWith('validtoken', expect.any(String), expect.any(Function));
    expect(req.user).toEqual(mockUser);
    expect(next).toHaveBeenCalled();
  });

  it('Debe retornar 403 si el token es inválido', () => {
    const req = { headers: { authorization: 'Bearer invalidtoken' } };
    const res = {
      status: jest.fn(() => res),
      send: jest.fn()
    };
    const next = jest.fn();

    jwt.verify.mockImplementation((token, secret, callback) => callback(new Error('Token inválido')));
    
    authenticateToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith('Token inválido.');
    expect(next).not.toHaveBeenCalled();
  });
});
