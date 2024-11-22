import { Request, Response, NextFunction } from "express"; 
const TrackError = (fn: Function) => (req: Request, res: Response, next: Function) => {
    return fn(req, res, next).catch((err:any) => {
      console.error("Error caught by TrackError:", err);
      res.status(500).json({ error: err.message });
    });
  };
  
export default TrackError;