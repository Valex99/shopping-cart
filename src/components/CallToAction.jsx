export default function CallToAction() {
    return (
      <div className="bg-[#f7EDE1] h-[350px] pt-[60px] pb-[70px] px-6 md:px-40">
        <h2 className="text-center text-xl font-semibold mb-10">
          Purchase Your Custom Timepiece
        </h2>
        <div className="flex flex-col md:flex-row justify-between text-center gap-10">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">1</h3>
            <p className="text-sm leading-relaxed">
              Browse and select the wristwatch that fits your style and needs.
              Whether you’re after a classic timepiece or a modern statement watch — 
              find your perfect match in our collection.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">2</h3>
            <p className="text-sm leading-relaxed">
              Schedule a personalized consultation through our website or contact us directly. 
              A SAVANT Watches specialist will connect with you to discuss your preferences, 
              customization options, or any questions you may have.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">3</h3>
            <p className="text-sm leading-relaxed">
              Attend your scheduled session (online or in-store) to finalize your order. 
              Once confirmed, your customized watch will be carefully prepared and shipped 
              directly to your doorstep.
            </p>
          </div>
        </div>
      </div>
    );
  }