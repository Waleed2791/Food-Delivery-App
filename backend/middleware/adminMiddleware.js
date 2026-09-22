const adminMiddleware = (req, res, next) => {

    if (req.role !== "admin") {
        return res.json({
            success: false,
            message: "Admin access required"
        });
    }

    next();
};

export default adminMiddleware;