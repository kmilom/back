const jwt = require('jsonwebtoken');
const auth = require('../src/auth/index');
const config = require('../src/config');

jest.mock('jsonwebtoken');

describe('Auth Module', () => {
  it('Debe crear un token correctamente', () => {
    const payload = { id: 1, username: 'user' };
    const mockToken = 'mockToken';

    // Simula que jwt.sign devuelve un token mock
    jwt.sign.mockReturnValue(mockToken);

    const token = auth.createToken(payload);
    
    expect(token).toBe(mockToken);
    expect(jwt.sign).toHaveBeenCalledWith(payload, config.jwt.secret);
  });
});
