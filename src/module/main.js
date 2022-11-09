var Matter = module.exports = require('../core/Matter');

Matter.Axes = require('../geometry/Axes');
Matter.Bodies = require('../factory/Bodies');
Matter.Body = require('../body/Body');
Matter.Bounds = require('../geometry/Bounds');
Matter.Collision = require('../collision/Collision');
Matter.Common = require('../core/Common');
Matter.Composite = require('../body/Composite');
Matter.Composites = require('../factory/Composites');
Matter.Constraint = require('../constraint/Constraint');
Matter.Contact = require('../collision/Contact');
Matter.Detector = require('../collision/Detector');
Matter.Engine = require('../core/Engine');
Matter.Events = require('../core/Events');
Matter.Grid = require('../collision/Grid');
Matter.Pair = require('../collision/Pair');
Matter.Pairs = require('../collision/Pairs');
Matter.Plugin = require('../core/Plugin');
Matter.Query = require('../collision/Query');
Matter.Resolver = require('../collision/Resolver');
Matter.SAT = require('../collision/SAT');
Matter.Sleeping = require('../core/Sleeping');
Matter.Svg = require('../geometry/Svg');
Matter.Vector = require('../geometry/Vector');
Matter.Vertices = require('../geometry/Vertices');
Matter.World = require('../body/World');

// temporary back compatibility
Matter.Common.deprecated(Matter.Engine, 'run', 'Engine.run ➤ use Matter.Runner.run(engine) instead');
