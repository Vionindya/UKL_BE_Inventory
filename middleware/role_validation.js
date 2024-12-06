export const hasRole = (allowedRoles) => {
    return async (req, res, next) => {
      const userRole = req.user?.userRole;
  
      if (!userRole) {
        return res.status(401).json({
          success: false,
          message: 'Role not found',
        });
      }
  
      if (allowedRoles.includes(userRole)) {
        return next();
      } else {
        return res.status(403).json({
          success: false,
          auth: false,
          message: `You are not authorized as ${allowedRoles.join(', ')}`,
        });
      }
    };
  };
  
  export const IsAdmin = async(req,res, next)=>{
    const userRole = req.user.role
    if(userRole == 'admin'){
        next()
    }else{
        res.status(403).json({
            success: false,
            auth: false,
            message: 'You are not admin'
        })
    }
}
export const IsMember = async(req,res, next)=>{
    const userRole = req.user.role
    if(userRole == 'member'){
        next()
    }else{
        res.status(403).json({
            success: false,
            auth: false,
            message: 'You are not member'
        })
    }
}